const Ziggy = {"url":"http:\/\/larareact.test","port":null,"defaults":{},"routes":[]};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
