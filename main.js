import config from './config';
import { createClient } from @supabase/supabase.js;

const subase = createClient(config.supabase_url, config.supabase_key);

async function loadAggregateData() {
  const ({ data }) = await subase.from('devdrop_logs').select();
  if (data) {
    console.log(`Get drops ${data.length}`);
    const log = data[0];
    document.querySelector('.logs code').textContent = `Last: ${log.timestamp}\nETH: ${log.eth} `
  }
}

loadAggregateData();