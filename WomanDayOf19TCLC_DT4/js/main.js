a = [
    ["Dương Trường Vũ", 
    "Đẹp trai, con nhà giàu, học giỏi... là những tố chất mình hoàn toàn không có :v... Tuy nhiên thì mình được cái là ngoài ăn ở dơ thì còn sủa bẩn", 
    "Cũng đến 8-3 rồi, chúc vợ 2, vợ 3, vợ 4, vợ 5, vợ 6, vợ 7, vợ 8 của mìnnnnnn ngày càng xinh đẹp, sẽ có nhiều thành công trong học vấn và các con đường riêng của mỗi vợ :v do covid19 mà chúng mình không thể bên nhau như các năm trước, nhưng các vợ đừng buồn... Sau này mình sẽ dùng tấm thân nhỏ bé này bù đắp lại cho các vợ những cô đơn mà các vợ đã chịu trong thời gian qua... Tuy mình trong này có hơi chút ho và sốt nhẹ nhưng chắc không có sao đâu, các vợ không cần phải lo... Mình sẽ gặp lại nhau sớm thôi.Yêu vợ es",
    "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-1/c0.0.736.736a/86390666_225101068650621_6854535085908033536_n.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=rlIEWh7Y7acAX_lgAPO&_nc_ht=scontent.fdad3-1.fna&oh=b5cca7889ceec2b696b91759e2b3f74d&oe=5E98FEC8"
    ],
]

function makeCard(name, des, wishes, img) {
    return (
        '<div class="col-xs-12 col-sm-6 col-md-4">'
        + '<div class="image-flip" ontouchstart="this.classList.toggle(\'hover\');">'
        + ' <div class="mainflip">'
        + '<div class="frontside">'
        + ' <div class="card">'
        + '<div class="card-body text-center">'
        + '<p><img class=" img-fluid"'
        + 'src="' + img + '"'
        + 'alt="card image"></p>'
        + '<h4 class="card-title">' + name + '</h4>'
        + '<p class="card-text">' + des + ' </p>'
        + ' </div>'
        + '  </div>'
        + '</div>'
        + ' <div class="backside">'
        + ' <div class="card">'
        + '<div class="card-body text-center mt-4">'
        + '<h4 class="card-title">' + name + '</h4>'
        + '<p class="card-text">'
        + wishes
        + '</p>'
        + '</div>'
        + ' </div>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>'
    )
}