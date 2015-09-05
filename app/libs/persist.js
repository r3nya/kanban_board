import makeFinalStore from 'alt/utils/makeFinalStore';

export default (alt, storage, storeName) => {
  const finalStore = makeFinalStore(alt);

  alt.bootstrap(storage.get(storeName));

  finalStore.listen(() => {
    if (!storage.get('debug')) {
      storage.set(storeName, alt.takeSnapshot());
    }
  });
}
