// let btnText = document.querySelector('#btnText');
// let btnHtml = document.querySelector('#btnHtml');
// let content = document.querySelector('#content');
// let para1 = document.querySelector('#para1');
// let para2 = document.getElementById('para2');

// document.getElementById("para2").style.display = "none";

// document.getElementById('btnText').addEventListener('click',() => {
//     // document.getElementById('para1').innerText=document.getElementById('para2');
//     // document.getElementById('para1').style.display='none';
//     document.getElementById('cpage').style.display='block';
//     // document.getElementById('para1').innerText=document.getElementById('c2-para1');
//     // document.getElementById('c2-para1').style.display='block';


// });

// document.getElementById('mergeInfo').style.display='none';

document.getElementById('b_sort').onclick = function() {
    document.getElementById('mergeInfo').style.display='none';
    document.getElementById('bubbleInfo').style.display='block';
    document.getElementById('heapInfo').style.display='none';
    document.getElementById('selectionInfo').style.display='none';
    document.getElementById('insertionInfo').style.display='none';
    document.getElementById('quickInfo').style.display='none';
}

document.getElementById('m_sort').onclick = function() {
    document.getElementById('mergeInfo').style.display='block';
    document.getElementById('bubbleInfo').style.display='none';
    document.getElementById('heapInfo').style.display='none';
    document.getElementById('selectionInfo').style.display='none';
    document.getElementById('insertionInfo').style.display='none';
    document.getElementById('quickInfo').style.display='none';
}

document.getElementById('h_sort').onclick = function() {
    document.getElementById('mergeInfo').style.display='none';
    document.getElementById('bubbleInfo').style.display='none';
    document.getElementById('heapInfo').style.display='block';
    document.getElementById('selectionInfo').style.display='none';
    document.getElementById('insertionInfo').style.display='none';
    document.getElementById('quickInfo').style.display='none';
}

document.getElementById('i_sort').onclick = function() {
    document.getElementById('mergeInfo').style.display='none';
    document.getElementById('bubbleInfo').style.display='none';
    document.getElementById('heapInfo').style.display='none';
    document.getElementById('selectionInfo').style.display='none';
    document.getElementById('insertionInfo').style.display='block';
    document.getElementById('quickInfo').style.display='none';
}

document.getElementById('s_sort').onclick = function() {
    document.getElementById('mergeInfo').style.display='none';
    document.getElementById('bubbleInfo').style.display='none';
    document.getElementById('heapInfo').style.display='none';
    document.getElementById('selectionInfo').style.display='block';
    document.getElementById('insertionInfo').style.display='none';
    document.getElementById('quickInfo').style.display='none';
}

document.getElementById('q_sort').onclick = function() {
    document.getElementById('mergeInfo').style.display='none';
    document.getElementById('bubbleInfo').style.display='none';
    document.getElementById('heapInfo').style.display='none';
    document.getElementById('selectionInfo').style.display='none';
    document.getElementById('insertionInfo').style.display='none';
    document.getElementById('quickInfo').style.display='block';
}



// btnHtml.addEventListener('click',() => {
//     document.getElementById("para2").style.display = "block";
//     para1.innerHTML=para2;

// });
