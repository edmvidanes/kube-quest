const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const server=http.createServer((req,res)=>{const pathname=new URL(req.url,'http://localhost').pathname;if(!['/','/index.html','/kube-quest/','/kube-quest/index.html'].includes(pathname)){res.writeHead(404);return res.end('Not found');}res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});res.end(fs.readFileSync(path.join(root,'index.html')));});
server.listen(Number(process.env.PORT||4177),'127.0.0.1',()=>console.log('KubeQuest: http://127.0.0.1:'+server.address().port+'/kube-quest/'));
