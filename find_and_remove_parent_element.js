(function removeParentElement() {
    // Get the scoped container
    const container = document.querySelector('#incomaker_content_body');
    if (!container) {
        console.log('Element #incomaker_content_body not found.');
        return;
    }

    // Find all elements with class .inco_tmpl_content inside the container
    const elements = container.querySelectorAll('.inco_tmpl_content');
    let removedCount = 0;

    elements.forEach(elem => {
        // Find the closest parent <tr> and remove it
        const tr = elem.closest('tr');
        if (tr) {
            tr.remove();
            removedCount++;
        }
    });

    // Output number of removed <tr> rows
    console.log('Removed <tr> rows:', removedCount);
})();
