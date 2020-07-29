var scifi_con='scifi_content';
var action_con='action_content';

document.querySelector('#scifi').addEventListener('click',function(){
	hideHeadder('hddr1','hddr3','hddr2','hddr4');
	document.querySelector('#scifi').classList.toggle('active');
	//document.querySelector('#action').classList.remove('active');
	
});
document.querySelector('#action').addEventListener('click',function(){
	hideHeadder('hddr2','hddr4','hddr1','hddr3');
	document.querySelector('#action').classList.toggle('active');
	//document.querySelector('#scifi').classList.remove('active');
	
});

function hideHeadder(hdr,hdr2,hdr3,hdr4){
	if (document.getElementById(hdr).style.display==='none') {
		document.getElementById(hdr).style.display='block';
		document.getElementById(hdr2).style.display='none';

	}
	else{
		document.getElementById(hdr).style.display='none';
		document.getElementById(hdr2).style.display='block';
	}
}

function openLink(Link){
	window.open(Link,'blank');
}