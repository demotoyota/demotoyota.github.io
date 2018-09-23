
const getDongXe = ten_xe => {
    const list_dong_xe = [
        'Fortuner',
        'Hilux',
        'Vios',
        'Innova',
        'Corolla Altis',
        'Camry',
        'Land Cruiser',
        'Hiace',
        'Alphard',
        'Land Cruiser Prado',
        'Yaris'
    ]
    const dong_xe = list_dong_xe.filter(item => ten_xe.includes(item))[0] || ''
    return dong_xe
}
module.exports = getDongXe