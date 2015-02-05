# EstebanProyects

1.- Ejecutar la aplicación junto con la contraseña:
	 node Stream-server.js mipassword
	 
2.- Ejectuar ffmpeg con las siguientes opciones:
	 ffmpeg -s 640x480 -f video4linux2 -i /dev/video0 -f mpeg1video \ 
-b 800k -r 30 http://localhost:8082/mipassword/640/480/

3.- Abrir stream-example.html en tu navegador preferido, pero es necesario que sea actual para que pueda ejecutarse correctamente

4.- Disfruta de tu Streaming de video
