const brands = [
    'Nike',
    'Reebok',
    'Adidas'
]

module.exports.controllerBrand = {
 brand1: (req, res) => {
    const { news } = req.params
     res.json(`Добавлен новый бренд : ${news}`)
 },
 brand2: (req, res) => {
    res.json(brands)
 },
 brand3: (req, res) => {
    const { id } = req.params
    res.json(`Удалён бренд : ${brands[id - 1]}`)
}
 
}