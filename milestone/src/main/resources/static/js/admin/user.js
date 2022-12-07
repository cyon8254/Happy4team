/* ------------------필터 클릭, 호버--------------------- */
const $filter = $('.card-toolbar-item').eq(0);
const $filterDropdown = $('.menu-sub-dropdown');
const $filters = $('.card-toolbar-item');
const $filtersLast = $('.card-toolbar-itemBox').children().last()
let check1 = false;

$(document).on('click', function (e) {
    if (check1) {
        if (e.target.closest('.menu-sub-dropdown') == e.currentTarget.querySelector('.menu-sub-dropdown').closest('.menu-sub-dropdown')) {
            if($(".apply-button").text().match('적용')){
                $filterDropdown.css('display', 'none');
                $filter.css('background-color', '#f6f8fa');
                $filter.css('color', '#009ef7');
                $filter.find('#filter-img').css({
                    'background': `url('/imgs/admin/filterBlue.png')`,
                    'background-size': '13px'
                });
                check1 = !check1;
            }
        } else {
            $filterDropdown.css('display', 'none');
            $filter.css('background-color', '#f6f8fa');
            $filter.css('color', '#009ef7');
            $filter.find('#filter-img').css({
                'background': `url('/imgs/admin/filterBlue.png')`,
                'background-size': '13px'
            });
            check1 = !check1;
        }
    }
})

$filter.on("click", function () {
    if ($filterDropdown.css('display') == 'none') {
        $filter.css('background-color', '#009ef7');
        $filter.css('color', '#fff');
        $filter.find('#filter-img').css({
            'background': `url('/imgs/admin/filterWhite.png')`,
            'background-size': '13px'
        });
        $filterDropdown.css('display', 'flex');
        setTimeout(() => {
            check1 = !check1;
        }, 100);
    }
})

$filters.on('mouseover', function () {
    $(this).css('background-color', '#009ef7');
    $(this).css('color', '#fff');
    $(this).find('#out-img').css({
        'background': `url('/imgs/admin/outWhite.png') no-repeat`,
        'background-size': '13px'
    })
    $(this).find('#plusBlue-img').css({
        'background': `url('/imgs/admin/plusWhite.png') no-repeat`,
        'background-size': '17px'
    })
    $(this).find('#filter-img').css({
        'background': `url('/imgs/admin/filterWhite.png')`,
        'background-size': '13px'
    })
})

$filters.on('mouseout', function () {
    $(this).css('background-color', '#f6f8fa');
    $(this).css('color', '#009ef7');
    $(this).find('#out-img').css({
        'background': `url('/imgs/admin/out.png') no-repeat`,
        'background-size': '13px'
    })
    $(this).find('#plusBlue-img').css({
        'background': `url('/imgs/admin/plusBlue.png') no-repeat`,
        'background-size': '17px'
    })
    $(this).find('#filter-img').css({
        'background': `url('/imgs/admin/filterBlue.png')`,
        'background-size': '13px'
    })
})
/* 삭제 모달*/
$filtersLast.on('click', function () {
    if ($('input:checkbox[name=check]:checked').length == 0) {
        $(".delete-modal1").css('display', 'block');
        body.style.overflow = 'hidden';
    } else {
        if (deleteModal.classList.contains('show')) {
            body.style.overflow = 'hidden';
        }
        deleteModal.classList.toggle('show');
    }
});

/* 확인 모달창 닫기 */
$(".delete-modal-cancel1").on('click', function () {
    $(".delete-modal1").css('display', 'none');
    body.style.overflow = 'unset';
})

/* ---------------------필터 서브-------------- */
const $selectOption = $('.menu-sub-dropdown-option-box');

$selectOption.on('click', function () {
    console.log('방가')
    if ($(this).find('input').is(':checked')) {
        $(this).find('.menu-sub-dropdown-option-sub').css('display', 'flex');
        $(this).find('input').prop('checked', true);
    } else {
        $(this).find('.menu-sub-dropdown-option-sub').css('display', 'none');
        $(this).find('input').prop('checked', false);
    }
})

/* ----------------- 필터 서브 옵션 호버---------------- */
const $subOption = $('.menu-sub-dropdown-option-sub-item');

$subOption.on('mouseover', function () {
    $(this).css('background-color', '#f4f6fa');
    $(this).css('color', '#009ef7');
})
$subOption.on('mouseout', function () {
    $(this).css('background-color', '#fff');
    $(this).css('color', '#5e6278');
})

$subOption.on('click', function () {
    $(this).closest('label').find('.menu-sub-dropdown-option-text').html($(this).html());
})

/* ------------------ 필터 서브 옵션 푸터 호버----------------*/

const $subOptionResetChoose = $('.menu-sub-dropdown-Botton').eq(0);
const $subOptionApllyChoose = $('.menu-sub-dropdown-Botton').eq(1);
$subOptionApllyChoose.css('background-color', '#009ef7');
$subOptionApllyChoose.css('color', '#fff');

$subOptionResetChoose.on('mouseover', function () {
    $(this).css('color', '#009ef7');
})
$subOptionResetChoose.on('mouseout', function () {
    $(this).css('color', '#7e8299');
})

$subOptionApllyChoose.on('mouseover', function () {
    $(this).css('background-color', '#0095e8');
})
$subOptionApllyChoose.on('mouseout', function () {
    $(this).css('background-color', '#009ef7');
})

/* ----------------체크박스-------------------- */
const $checkBox = $('.notice-checked');
const $checkBoxAll = $('.notice-checked-all');
var checkBoxArr = [];   //체크한 userId값 저장

$('.card-body-title-box').on('click','.notice-checked-all' , function(e) {

    if ($checkBoxAll.is(':checked')) {
        $checkBoxAll.closest('.card-body-title-user-checkbox').css('background-color', '#009ef7');
        $checkBoxAll.prev().css('display', 'flex');
        $checkBox.closest('.card-body-title-user-checkbox').css('background-color', '#009ef7');
        $checkBox.prev().css('display', 'flex');
        $checkBox.prop('checked', true);
    } else {
        $checkBoxAll.closest('.card-body-title-user-checkbox').css('background-color', '#eff2f5');
        $checkBoxAll.prev().css('display', 'none');
        $checkBox.closest('.card-body-title-user-checkbox').css('background-color', '#eff2f5');
        $checkBox.prev().css('display', 'none');
        $checkBox.prop('checked', false);
    }

    // $("input:checkbox[name='check']:checked").each(function() {
    //     checkBoxArr.push($(this).val());     // 체크된 것만 값을 뽑아서 배열에 push
    //     console.log(checkBoxArr);
    // })
    // $("input:checkbox[name='check2']:checked").each(function() {
    //     checkBoxArr.push($(this).val());     // 체크된 것만 값을 뽑아서 배열에 push
    //     console.log(checkBoxArr);
    // })

})

$('.card-body-main-box').on('click','.notice-checked', function (e) {

    if ($(this).is(':checked')) {
        $(this).closest('.card-body-title-user-checkbox').css('background-color', '#009ef7');
        $(this).prev().css('display', 'flex')
    } else {
        $(this).closest('.card-body-title-user-checkbox').css('background-color', '#eff2f5');
        $(this).prev().css('display', 'none')
        $checkBoxAll.prop('checked', false);
        $checkBoxAll.closest('.card-body-title-user-checkbox').css('background-color', '#eff2f5');
        $checkBoxAll.prev().css('display', 'none');
    }
    if ($checkBox.filter(":checked").length == $checkBox.length) {
        $checkBoxAll.prop('checked', true);
        $checkBoxAll.closest('.card-body-title-user-checkbox').css('background-color', '#009ef7');
        $checkBoxAll.prev().css('display', 'flex');
    }

    console.log($("input:checkbox[name='check2']:checked"));
    $("input:checkbox[name='check2']:checked").each(function() {
        checkBoxArr.push($(this).val());     // 체크된 것만 값을 뽑아서 배열에 push
        console.log(checkBoxArr);
    })
})



/* -----------삭제 모달창-------------- */
const $delete = $('.donate-outBox');
const $finalDelete = $('.delete-modal-delete');
const $finalDeleteCancel = $('.delete-modal-cancel');
const deleteModal = $('.delete-modal')[0];

$finalDelete.on('click', function () {
    deleteModal.classList.toggle('show');
    body.style.overflow = 'auto';
})

$finalDeleteCancel.on('click', function () {
    deleteModal.classList.toggle('show');
    body.style.overflow = 'auto';
})

$delete.on('click', function () {
    deleteModal.classList.toggle('show');

    if (deleteModal.classList.contains('show')) {
        body.style.overflow = 'hidden';
    }
})

$delete.on('mouseover', function () {
    $(this).css('color', '#009ef7');
    $(this).css('background-color', '#f1faff');
})
$delete.on('mouseout', function () {
    $(this).css('color', '#7e8299');
    $(this).css('background-color', '#f5f8fa');
})

/* -------------- 페이지 이동 호버 ---------------- */
const $pageNumberLink = $('.page-number-link');

$pageNumberLink.on('mouseover', function () {
    $(this).css('background-color', '#f4f6fa');
    $(this).css('color', '#009ef7');
})

$pageNumberLink.on('mouseout', function () {
    $(this).css('background-color', '#fff');
    $(this).css('color', '#5e6278');
})

/* ---------------메인 툴바 타입 호버----------------- */
const $userType = $('.toolbar-choose-usertype-flex');

$userType.on('mouseover', function () {
    $(this).css('color', '#009ef7');
})

$userType.on('mouseout', function () {
    $(this).css('color', '#5e6278');
})


/*=========================================================*/
const $search = $('input[name = search]');
globalThis.page = 0;
let $pagingBtnFlex = $('.paging-number-flex');
let pageInfo;

/* 처음 뿌리기 */
peopleListShow();

function peopleListShow(){
    console.log('몇페이지 : '+page);

    getPeopleList1({
        peopleNickName: $search.text(),
        userName: $search.text(),
        page: globalThis.page
    }, getPeopleList)
}

function getPeopleList(peopleResp) {
    let text = "";
    pageInfo = peopleResp.arPeopleDTO;
    peopleResp.arPeopleDTO.content.forEach(person => {
        text += `<input type="hidden" value="` + person.userId + `"name ="check2">`
        text += `<tr>`
        text +=  `<th class="card-body-title-checkbox-padding" style="width: 3%; margin-top: 29px;padding-top: 0; padding-bottom: 31px;">`
        text += `<label class="card-body-title-user-checkbox">`
        text += `<div class="check-img"></div>`
        text += `<input class="notice-checked" type="checkbox" name="check">`
        text += `</label>`
        text += `</th>`
        text += `<th class="card-body-title-padding" style="width: 22%;">`
        text += `<div class="donater-info" style="height: 50px">`
        text += `<div class="donater-info-img1"></div>`
        text += `<div class="donater-info-text">`
        text += `<div class="donater-name">`+person.userName+`</div>`
        text += `<div>`+ person.userEmail +`</div>`
        text += `</div>`
        text += `</div>`
        text += `</th>`
        text += `<th class="card-body-title-padding" style="width: 18%;">`
        text += `<div class="donate-info-height">`+ person.userPhoneNumber+`</div>`
        text += `</th>`
        text += `<th class="card-body-title-padding" style="width: 17%;">`
        text += `<div class="donate-info-height user-type">`+'일반'+`</div>`
        text += `</th>`
        text += `<th class="card-body-title-padding" style="width: 18%;">`
        text += `<div class="donate-info-height">`+person.peopleNickname+`</div>`
        text += `</th>`
        text += `<th class="card-body-title-padding" style="width: 22%;">`

        let date = new Date(person.createdDate);
        let year = date.getFullYear().toString().substr(2)+'년 ';
        let month = date.getMonth() + 1 +'월 ';
        let day = date.getDate()+'일';
        let createdDateView = year+month+day;

        text += `<div class="donate-info-height">`+ createdDateView +`</div>`
        text += `</th>`
        text += `</tr>`
    })
    $(".card-body-main-box").html(text)
    pageingBtn();
}

function getPeopleList1(param, callback, error){

    let existPeopleNickName = param.peopleNickName.length != 0;
    let existUserName = param.userName.length != 0;
    let queryString = "/" + param.page || 1;

    queryString += existPeopleNickName ? "/" + param.peopleNickName : "";

    if (!existPeopleNickName && existUserName) {
        queryString += "/null";
    }
    queryString += existUserName ? "/" + param.userName : "";
    $.ajax({
        url : "/adminRest/userpeople"+queryString,
        type : "get",
        success : function (peopleResp, status, xhr) {
            if(callback){
                callback(peopleResp)
            }
        },
        error: function (xhr, status, err) {
            if (error) {
                error(err);
            }
        }
    });
}

/* 일반회원 검색 */
function search() {
    console.log("$search.text() : "+$search.val())
    getPeopleList1({
        peopleNickName: $search.val(),
        userName: $search.val(),
        page: globalThis.page
    }, getPeopleList);
}


/* 이름, 주소 검색 */
$search.on("keyup", function (event) {
    if (event.keyCode === 13) {
        search()
    }
});


/* 페이징 처리 */
function pageingBtn() {
    let text = "";
    let nowPage = pageInfo.pageable.pageNumber + 1;
    let endPage = Math.ceil(nowPage / 5) * 5;
    let startPage = endPage - 5 + 1;
    // <!--페이징 처리-->
    // 이전
    if (startPage > 1) {
        text += `<div class="prev-page page-number-padding">`
        text += `<a class="page-number-link" href="` + (startPage - 2) + `">`
        text += `<div class="prev-page-prevArrow"></div>`
        text += `</a>`
        text += `</div>`
    } else {
        text += `<div class="prev-page page-number-padding">`
        text += `</div>`
    }
    // 페이지 버튼

    for (let i = startPage; i < startPage + 5 && i <= pageInfo.totalPages; i++) {
        text += `<div class="page-number-padding">`
        if (i == nowPage) {
            text += `<div class="page-number-link" style="color:#303441">` + i + `</div>`
        } else {
            text += `<a class="page-number-link" href="` + (i - 1) + `">` + i + `</a>`
        }
        text += `</div>`
    }
    //이후
    if (4 < endPage && endPage < pageInfo.totalPages) {
        text += `<div class="next-page page-number-padding">`
        text += `<a class="page-number-link" href="` + (endPage) + `">`
        text += `<div class="prev-page-nextArrow"></div>`
        text += `</a>`
        text += `</div>`
        text += `</div>`
        text += `</div>`
    }
    $pagingBtnFlex.html(text);
}

$pagingBtnFlex.on('click', ".page-number-link", function (e) {
    e.preventDefault();
    window.scrollTo({top: 0})
    globalThis.page = $(this).attr("href");
    search();
})

/*  페이지 이동  */
$pagingBtnFlex.on('mouseover', "a.page-number-link", function () {
    $(this).css('background-color', '#f4f6fa');
    // $(this).css('color', '#009ef7');
})

$pagingBtnFlex.on('mouseout', "a.page-number-link", function () {
    $(this).css('background-color', '#fff');
    $(this).css('color', '#9a9ba7');
})

window.onresize = function () {
    document.location.reload();
};