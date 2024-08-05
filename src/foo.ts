import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://sdfds.supabase.co", "sfsd");

supabase.from("sdfsd").select("*").then(console.log);

// TypeError [ERR_INVALID_URL]: Invalid URL
//     at __node_internal_captureLargerStackTrace (node:internal/errors:477:5)
//     at new NodeError (node:internal/errors:387:5)
//     at URL.onParseError (node:internal/url:564:9)
//     at new URL (node:internal/url:640:5)
//     at SupabaseClient (/Users/hi-wolfy_1/Desktop/code/포트폴리오용/daangn-maru/node_modules/@supabase/supabase-js/src/SupabaseClient.ts:85:37)
//     at createClient (/Users/hi-wolfy_1/Desktop/code/포트폴리오용/daangn-maru/node_modules/@supabase/supabase-js/src/index.ts:40:10)
//     at <anonymous> (/Users/hi-wolfy_1/Desktop/code/포트폴리오용/daangn-maru/src/foo.ts:3:18)
//     at Object.<anonymous> (/Users/hi-wolfy_1/Desktop/code/포트폴리오용/daangn-maru/src/foo.ts:8:52)
//     at Module._compile (node:internal/modules/cjs/loader:1126:14)
//     at Object.transformer (/Users/hi-wolfy_1/.npm/_npx/fd45a72a545557e9/node_modules/tsx/dist/register-CCR7NebB.cjs:3:1101)
//     at Module.load (node:internal/modules/cjs/loader:1004:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:839:12)
//     at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:170:29)
//     at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
//     at async Promise.all (index 0)
//     at async ESMLoader.import (node:internal/modules/esm/loader:533:24)
//     at async loadESM (node:internal/process/esm_loader:91:5)
//     at async handleMainPromise (node:internal/modules/run_main:65:12) {
//   input: 'https://<project>.supabase.co/auth/v1',
//   code: 'ERR_INVALID_URL'
// }
// %
