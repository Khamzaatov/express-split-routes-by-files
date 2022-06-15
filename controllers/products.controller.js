const arr = [
    'Яблоко',
    'Груша',
    'Ананас'
]

module.exports.controllerProducts = {
  product1:  (req, res) => {
    res.json(arr)
  },
  product2:  (req, res) => {
    const { id } = req.params
    res.json(arr[id]) 
  },
  prodect3: (req, res) => {
    const { id } = req.params
    res.json(`Добавил продукт : ${id}`) 
   },
   product4: 
    (req, res) => {
        const { id } = req.params
        res.json(`Удалён продукт : ${arr[id - 1]}`)
    }
}