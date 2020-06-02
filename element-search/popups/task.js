function popup() {
    const modalFirst = document.getElementById('modal_main');
    const modalSecond = document.getElementById('modal_success');
    const btnClose = document.querySelectorAll('.modal__close_times');
    const btnNextModal = document.querySelector('.btn_danger');
    const btnSuccess = document.querySelector('.btn_success');
    modalFirst.className = 'modal modal_active';

    btnClose[0].onclick = closeModal;
    btnClose[1].onclick = closeModal;
    btnSuccess.onclick = closeModal;
    btnNextModal.onclick = () => {
        modalFirst.className = 'modal';
        modalSecond.className = 'modal modal_active';
    }

    function closeModal() {
        modalFirst.className = 'modal';
        modalSecond.className = 'modal';
    }
}

popup();
