document.addEventListener('DOMContentLoaded', () => {
  const eth = (Math.random() * 0.10000).toFixed(4);
  const elem = document.querySelector('.eth-balance');
  elem.textContent = `ETH Rest: ${eth } (Mock)`;
});