// This file contains JavaScript code for the web tool project.
// Add your JavaScript functionality here.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('web-tool-form');
    const output = document.getElementById('output');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputData = document.getElementById('input-data').value;
        output.textContent = `You entered: ${inputData}`;
    });
});