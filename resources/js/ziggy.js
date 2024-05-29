const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"profile.edit":{"uri":"profile","methods":["GET","HEAD"]},"profile.update":{"uri":"profile","methods":["PATCH"]},"profile.destroy":{"uri":"profile","methods":["DELETE"]},"category.list":{"uri":"Admin\/Category\/List","methods":["GET","HEAD"]},"category.create":{"uri":"Admin\/Category\/Create","methods":["GET","HEAD"]},"category.edit":{"uri":"Admin\/Category\/Edit\/{id}","methods":["GET","HEAD"],"parameters":["id"]},"category.store":{"uri":"categories","methods":["POST"]},"category.update":{"uri":"categories\/{id}","methods":["PUT"],"parameters":["id"]},"category.destroy":{"uri":"categories\/{id}","methods":["DELETE"],"parameters":["id"]},"category.show":{"uri":"Admin\/Category\/Show\/{id}","methods":["GET","HEAD"],"parameters":["id"]},"menu.list":{"uri":"Admin\/Menu\/List","methods":["GET","HEAD"]},"menu.create":{"uri":"Admin\/Menu\/Create","methods":["GET","HEAD"]},"menu.edit":{"uri":"Admin\/Menu\/Edit","methods":["GET","HEAD"]},"menu.store":{"uri":"Admin\/Menu","methods":["POST"]},"menu.destroy":{"uri":"Admin\/Menu\/{id}","methods":["DELETE"],"parameters":["id"]},"table.list":{"uri":"Admin\/Table\/List","methods":["GET","HEAD"]},"table.create":{"uri":"Admin\/Table\/Create","methods":["GET","HEAD"]},"table.edit":{"uri":"Admin\/Table\/Edit","methods":["GET","HEAD"]},"table.store":{"uri":"Admin\/Table","methods":["POST"]},"table.destroy":{"uri":"Admin\/Table\/{id}","methods":["DELETE"],"parameters":["id"]},"area.list":{"uri":"Admin\/Area\/List","methods":["GET","HEAD"]},"area.create":{"uri":"Admin\/Area\/Create","methods":["GET","HEAD"]},"area.edit":{"uri":"Admin\/Area\/Edit","methods":["GET","HEAD"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"password.store":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"],"parameters":["id","hash"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"password.update":{"uri":"password","methods":["PUT"]},"logout":{"uri":"logout","methods":["POST"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
import { route } from './ziggy';

console.log(route('category.edit', { id: 1 }));
