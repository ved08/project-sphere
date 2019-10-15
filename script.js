function volume() {
    
    var r = parseFloat(document.getElementById('radius').value);

    var output = document.getElementById('output');

    var volume = 4/3*3.14*r*r*r;
    output.textContent="Volume = "+volume;

};

function area() {
    var radius = parseFloat(document.getElementById('radius1').value);

    var ans= document.getElementById('ans');

    var sa = 4*3.14*radius*radius;
    ans.textContent= "Surface area = "+sa;

};
