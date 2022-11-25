import useWebSocket from 'react-use-websocket';
import { JsonValue } from 'react-use-websocket/dist/lib/types';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { BinanceWebsocketParams } from '@/shared/hooks/infrastructure/websocket/binance/BinanceWebsocketParams';

export const socketUrl = 'wss://stream.binance.com:9443/stream';

const useBinanceWebsocket = <TWebSocketData, KOutput>(
  params: BinanceWebsocketParams,
  converter: (data: TWebSocketData) => KOutput,
): KOutput | undefined => {
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(socketUrl);
  const subscribe = useCallback(() => {
    sendJsonMessage({
      method: 'SUBSCRIBE',
      ...(params as unknown as JsonValue),
    });
  }, []);

  const unsubscribe = useCallback(() => {
    sendJsonMessage({
      method: 'UNSUBSCRIBE',
      ...(params as unknown as JsonValue),
    });
  }, []);

  useEffect(() => {
    subscribe();
    return unsubscribe;
  }, []);

  const messageHistory = useRef<KOutput>();

  // @ts-ignore
  messageHistory.current = useMemo(
    () =>
      // @ts-ignore
      lastJsonMessage?.data && converter(lastJsonMessage.data),
    [lastJsonMessage],
  );

  return messageHistory.current;
};

export default useBinanceWebsocket;
