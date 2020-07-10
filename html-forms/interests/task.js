function interests() {
    const interests = document.querySelectorAll('.interest__check');
    for (const interest of interests) {
        interest.addEventListener('click', clickInterest);
    };

    function clickInterest(event) {
        const commonInterest = event.target.closest('.interest').querySelector('.interests_active');
        if (commonInterest) {
            commonInterest.querySelectorAll('.interest__check').forEach(el => {
                if (event.target.checked) {
                    el.checked = true;
                } else {
                    el.checked = false;
                }
            });
        }
    };
}
document.addEventListener('DOMContentLoaded', interests);
