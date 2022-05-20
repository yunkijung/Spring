/**
 * 
 */
 
 
function selectEmp(){
	var infoModal = new bootstrap.Modal(document.getElementById('infoModal'))
	var empCode;
	
	if(arguments.length === 1){
		empCode = arguments[0];
	}
	else{
		empCode = '-';
	}
	
	
	$.ajax({
   url: '/admin/selectEmp', //요청경로
    type: 'post',
    data:{'empCode':empCode}, //필요한 데이터 '데이터이름':값
    success: function(result) {
	
	$('#empCode').val(result.empCode);
	$('#empId').val(result.empId);
	$('input[name=empPw]').val(result.empPw);
	$('#empName').val(result.empName);
	if(result.gender === "MALE"){
			$('#male').prop('checked', true);
		}
		else{
			$('#female').prop('checked', true);
		}
	if(result.empPhone != undefined){
	$('#empPhone1').val(result.empPhone.substr(0, 3));
	$('#empPhone2').val(result.empPhone.substr(4, 4));
	$('#empPhone3').val(result.empPhone.substr(9, 4));
	}
	else{
	$('#empPhone1').val('');
	$('#empPhone2').val('');
	$('#empPhone3').val('');
	}
	$('input[name=empAddr]').val(result.empAddr);
	$('input[name=birthDate]').val(result.birthDate);
	$('input[name=hireDate]').val(result.hireDate);
	$('select[name=deptCode]').val(result.deptCode).prop('selected', true);
	$('select[name=teamCode]').val(result.teamCode).prop('selected', true);
	$('select[name=managerCode]').val(result.managerCode).prop('selected', true);
	$('select[name=jobCode]').val(result.jobCode).prop('selected', true);
	$('input[name=empEmail]').val(result.empEmail);
	$('select[name=nationality]').val(result.nationality).prop('selected', true);
	$('select[name=isDomestic]').val(result.isDomestic).prop('selected', true);
	$('select[name=isInternational]').val(result.isInternational).prop('selected', true);
	
	if(result.empCode != undefined){
	var modalFooter = document.getElementById('modalFooter');
	modalFooter.innerHTML = '';
	var str = '';
	
	str += '<button type="button" class="btn btn-danger" id="deleteEmp">삭제</button>';
	str += '<button type="button" class="btn btn-primary" id="updateEmp">수정</button>';
	str += '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>';
	modalFooter.innerHTML += str;
	
	}
	
	
    infoModal.show();
      
      $("#deleteEmp").click(function () {
			 Swal.fire({
				 title: '삭제 하시겠습니까?',
				  text: "",
				   icon: 'warning', showCancelButton: true,
				    confirmButtonColor: '#3085d6',
				     cancelButtonColor: '#d33',
				      confirmButtonText: '승인',
				       cancelButtonText: '취소' }).then((result) => {
					 if (result.isConfirmed) {
							 formId.action = "/admin/deleteEmp";
							formId.submit();
						}
					 })
				 });
      $("#updateEmp").click(function () {
			 Swal.fire({
				 title: '수정 하시겠습니까?',
				  text: "",
				   icon: 'question', showCancelButton: true,
				    confirmButtonColor: '#3085d6',
				     cancelButtonColor: '#d33',
				      confirmButtonText: '승인',
				       cancelButtonText: '취소' }).then((result) => {
					 if (result.isConfirmed) {
							 formId.action = "/admin/updateEmp";
							formId.submit();
						}
					 })
				 });
      
      
	
    },
    error: function(){
       alert('실패');
    }
});
	
}

/*function deleteEmp(){
	var formId = document.getElementById('formId')
	if(confirm('정말 삭제하시겠습니까?')){
	formId.action = "/admin/deleteEmp";
	formId.submit();
	}
	else{
		return;
	}
	
}

function updateEmp(){
	
	if(confirm('수정 하시겠습니까?')){
	var empPhone = document.getElementById('empPhone');
	empPhone.value = document.getElementById('empPhone1').value + '-' + document.getElementById('empPhone2').value + '-' + document.getElementById('empPhone3').value; 
	var formId = document.getElementById('formId');
	formId.action = "/admin/updateEmp";
      formId.submit();
	}
	else{
		return;
	}
	
	
}*/

function insertEmp(){
	selectEmp();
	
	var modalFooter = document.getElementById('modalFooter');
	modalFooter.innerHTML = '';
	var str = '';
	
	str += '<button type="button" class="btn btn-primary" id="insertEmpInfo">추가</button>';
	str += '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>';
	
	modalFooter.innerHTML += str;
	
	$("#insertEmpInfo").click(function () {
			 Swal.fire({
				 title: '추가 하시겠습니까?',
				  text: "",
				   icon: 'question', showCancelButton: true,
				    confirmButtonColor: '#3085d6',
				     cancelButtonColor: '#d33',
				      confirmButtonText: '승인',
				       cancelButtonText: '취소' }).then((result) => {
					 if (result.isConfirmed) {
							 formId.action = "/admin/insertEmpInfo";
							formId.submit();
						}
					 })
				 });
				 
				  $("#insertEmpInfo").click(function () {
                Swal.fire({
                    icon: 'success',
                    title: '실행되었습니다.',
                    text: '새로운 직원이 추가되었습니다.',
                })
                formId.action = "/admin/insertEmpInfo";
				formId.submit();
            });
	
}

function insertEmpInfo(){
	var empPhone = document.getElementById('empPhone');
	empPhone.value = document.getElementById('empPhone1').value + '-' + document.getElementById('empPhone2').value + '-' + document.getElementById('empPhone3').value; 
	var formId = document.getElementById('formId');
	formId.action = "/admin/insertEmp";
	formId.submit();
}


	



