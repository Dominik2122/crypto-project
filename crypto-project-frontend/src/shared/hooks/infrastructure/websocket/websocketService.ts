export interface WebsocketService<T> {
  liveData: T | undefined;
  subscribe: () => void;
  unsubscribe: () => void;
}
