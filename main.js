import config from './config';
import { createClient } from @supabase/supabase.js;
import { renderDropChart } from './chart'

const subase = createClient(config.supabase_url, config.supabase_key);

async function loadDropStats() {
  const { data } = await subase.from('devdrop_logs').select();
  if (data) {
    const map = new Map();
    data.forEach(log => {
      const date = (new Date(log.timestamp)).getDate();
      const key = date.toLocaleDateString();
      map.set(key, (map.has(key) ? map.set(key, map.get(key) + 1) : 1));
    });
    const labels = [];
    const table = [];
    map.forEach((val, key) => {
      labels.push(key);
      table.push(val);
    });
    renderDropChart(labels, table);
  }
}
loadDropStats();

async function loadAggregateData() {
  const { data } = await subase.from('devdrop_logs').select();
  if (data) {
    const log = data[0];
    document.querySelector('.logs code').textContent = `Last: ${log.timestamp}\nETH: ${log.eth}`
}
}
lloadAggregateData();