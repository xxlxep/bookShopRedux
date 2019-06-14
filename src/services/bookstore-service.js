export default class bookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Production-ready Microcervices',
        author: 'Susan J. Flower',
        price: 33,
        coverImage: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRNAVIuV8rKVmFpYM1RNWR64HJXV6SFh_BUDQh7KvP_fBQjPu43'
      },
      {
        id: 2,
        title: 'Release It',
        author: 'Michael T. Nighart',
        price: 46,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX415_BO1,204,203,200_.jpg'
      },
    ];
  }
}
