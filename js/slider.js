//메인 슬라이더
$(function(){
    var imgNum = 0;  //이미지번호

    //초기화
    $('#main-visual .slider img')
      .hide()
      .eq(0)
      .show();

      //이미지 자동전환
    setInterval(function(){   //인터벌함수
        imgNum++; //이미지 번호 증가
        if(imgNum > 2) imgNum = 0; //마지막 이미지후 다시 처음으로 돌아가기
      $('#main-visual .slider img')
       .fadeOut()    //효과
       .eq(imgNum)
       .fadeIn();    //효과
    }, 5000);   //자동으로 바뀌는 시간
})

