


function get_random_images() {

    image_array = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png',
    '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png',
    '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png',
    '31.png', '32.png', '33.png', '34.png', '35.png', '36.png', '37.png', '38.png', '39.png', '40.png',
    '41.png', '42.png', '43.png', '44.png', '45.png', '46.png', '47.png', '48.png', '49.png', '50.png',
    '51.png', '52.png', '53.png', '54.png', '55.png', '56.png', '57.png', '58.png', '59.png', '60.png',
    '61.png', '62.png', '63.png', '64.png', '65.png', '66.png', '67.png', '68.png', '69.png', '70.png',
    '71.png', '72.png', '73.png', '74.png', '75.png', '76.png', '77.png', '78.png', '79.png', '80.png',
    '81.png', '82.png', '83.png', '84.png', '85.png', '86.png', '87.png', '88.png', '89.png', '90.png',
    '91.png', '92.png', '93.png', '94.png', '95.png', '96.png', '97.png', '98.png', '99.png', '100.png',
    '101.png', '102.png', '103.png', '104.png', '105.png', '106.png']


    index_a = Math.floor(Math.random() * 105);
    index_b = Math.floor(Math.random() * 105);
    index_c = Math.floor(Math.random() * 105);
    index_d = Math.floor(Math.random() * 105);
    index_e = Math.floor(Math.random() * 105);
    index_f = Math.floor(Math.random() * 105);
    index_g = Math.floor(Math.random() * 105);
    index_h = Math.floor(Math.random() * 105);



    selected_image_a = image_array[index_a];
    selected_image_b = image_array[index_b];
    selected_image_c = image_array[index_c];
    selected_image_d = image_array[index_d];
    selected_image_e = image_array[index_e];
    selected_image_f = image_array[index_f];
    selected_image_g = image_array[index_g];
    selected_image_h = image_array[index_h];

    

    var Path = '/Petits Projects/Random Deck Generator/images2/images/';
    


    document.getElementById('image1').src = Path + selected_image_a;
    document.getElementById('image2').src = Path + selected_image_b;
    document.getElementById('image3').src = Path + selected_image_c;
    document.getElementById('image4').src = Path + selected_image_d;
    document.getElementById('image5').src = Path + selected_image_e;
    document.getElementById('image6').src = Path + selected_image_f;
    document.getElementById('image7').src = Path + selected_image_g;
    document.getElementById('image8').src = Path + selected_image_h;



}

