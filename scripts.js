let data0 = {
    photosrc: 'img/apenft.jpg',
    title: 'Bored Ape Yach Club',
    description: 'A Bored Ape Yacht Club 10 000 NFT (nem helyettesíthető token) gyűjteménye, amelyeken majmok találhatóak. A projekt az Ethereum blokkláncon fut, és olyan NFT projektekből merít ihletet'
  };

let data1 = {
    photosrc: 'img/moonbirdsnft.jpg',
    title: 'Moonbirds',
    description: 'A PROOF Collective egy 1000 NFT-gyűjtőből és művészből álló privát közösség, amelynek élén az alapító, Kevin Rose áll. Rose egy soros internetes vállalkozó, aki a Revision3, a Digg, a Pownce és a Milk technológiai vállalatok portfóliójának társalapítója.'
  };
  
let data2 = {
    photosrc: 'img/doodlesnft.jpg',
    title: 'The Doodles',
    description: 'A Doodles egy közösség által vezérelt NFT gyűjthető projekt, amely Burnt Toast , azaz Scott Martin alkotásait mutatja be. Először 2021. október 17-én verték, a jelenlegi minimális ár az írás idején 16 ETH – ez 69 050,15 USD az OpenSea - n . A pénzverés utáni első 24 órában körülbelül 1 ETH-ért kaphatott volna egyet.'
  };

let data3 = {
    photosrc: 'img/drunkcatnft.jpg',
    title: 'Drunk Cat',
    description: 'A Gregs World egy 2500 NFT egyedülálló gyűjteménye, amely egy Greg nevű alkoholista macska útját mutatja be, érintve a való világ témáit, a történelem múltbeli pillanatait és a jövőbeli törekvéseket.'
  };

let data4 = {
    photosrc: 'img/galacticnft.jpg',
    title: 'The Galaktic Gang Collection',
    description: 'A Galaktic Gang kollekciót Chris Dyer, a gördeszkaművészetben induló vizuális művész hozta létre, és az iparág legnagyobb márkáinak grafikai tervezése felé mozdult el. A Galaktic Gang kollekció népszerűsége az elmúlt néhány hónapban jelentősen megnőtt. '
  };

let data5 = {
    photosrc: 'img/silksnft.jpg',
    title: 'Silks',
    description: 'Ez a gyűjtemény valós eseményeken alapul, ami azt jelenti, hogy a játékbeli „virtuális lovaknak” van megfelelője a való világban. Ez lehetővé teszi a metaverzum résztvevői számára, hogy hasznot húzzanak abból, ha a valós világ lovai jól teljesítenek a versenyeken. Minden ló egyedi tulajdonságokkal rendelkezik, amelyek a versenyrekordokból és társa edzéstörténetéből származnak. '
  };
  
let imgData = [data0, data1, data2, data3, data4, data5,];
let currentPhoto = 0;
  
function generate_thb(item, index) {
    $('.thb_container').append(`<img class='thb_holder' src="" alt="" data-index="${index}">`);
    $('.thb_holder:last-of-type').attr('src', imgData[index++].photosrc);
    
};
imgData.forEach(generate_thb);

function kep_process() {
    $('#photo').attr('src', imgData[currentPhoto].photosrc);
    $('#photo-title').text(imgData[currentPhoto].title);
    $('#photo-description').text(imgData[currentPhoto].description);
    $('.thb_holder').removeClass('active')
    $('.thb_holder:eq(0)').addClass('active')
}
kep_process();

function thb_loader () {
    let indexClicked = $(event.target).attr('data-index');
    /* indexClicked változó az az a data-index lesz amire klikkeltünk.
    Csakhogy ez egy string, nem szám -> */
    let numberIndex = parseInt(indexClicked);
    /* most már szám az indexClicked */
    $('#photo-title').text(imgData[numberIndex].title);
    $('#photo').attr('src', imgData[numberIndex].photosrc);
    $('#photo-description').text(imgData[numberIndex].description);
    $('.thb_holder').removeClass('active')
    $(event.target).addClass('active')
  }
  
$('.thb_holder').click((event) => {thb_loader ()});


$('#nextarrow').click(() => {
    let numberIndex1 = parseInt($('.active').attr('data-index'));
    if (numberIndex1 < imgData.length -1) {
    numberIndex1++;
    $('#photo-title').text(imgData[numberIndex1].title);
    $('#photo').attr('src', imgData[numberIndex1].photosrc);
    $('#photo-description').text(imgData[numberIndex1].description);
    $(".active + .thb_holder").addClass('active');
    $(".active:first").removeClass('active');
    
  } else {
    kep_process(currentPhoto = 0);
  }
});

$('#backarrow').click(() => {
    let numberIndex1 = parseInt($('.active').attr('data-index'));
    if (numberIndex1 > 0) {
    numberIndex1--;
    $('#photo-title').text(imgData[numberIndex1].title);
    $('#photo').attr('src', imgData[numberIndex1].photosrc);
    $('#photo-description').text(imgData[numberIndex1].description);
    $(".active").prev().addClass('active');
    $(".active:last").removeClass('active');
    
  } else {
    kep_process(currentPhoto = 5);
    $('.thb_holder:last-of-type').addClass('active');
    $(".active:first").removeClass('active');
         }
});