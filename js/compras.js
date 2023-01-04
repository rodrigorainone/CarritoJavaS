
/* esto es para que en el fotter cambie la imagen de la palomita */


function moverIcono(check,abajo,arriba) {
    const getCheckMenuAyudarte = document.querySelector(`#${check}`);
    const getLabelMenuAyu = document.querySelector(`#${abajo}`);
    const getLabelMenuAyuDos = document.querySelector(`#${arriba}`);
    getCheckMenuAyudarte.onclick = (e) =>{
    console.log(getLabelMenuAyu.checked)
        if (getCheckMenuAyudarte.checked == false){
        
            getLabelMenuAyuDos.style.display="none";
            getLabelMenuAyu.style.display="block";
        }
        else{
        
            getLabelMenuAyuDos.style.display="block";
            getLabelMenuAyu.style.display="none";
        }

    }
}
moverIcono("mostrarMenuAyudarte","labelMenuAyudarte","labelMenuAyudarteDos");
moverIcono("mostrarMenuNosotros","labelMenuNosotros","labelMenuNosotrosDos");
moverIcono("mostrarMenuInformar","LabelMenuInformar","LabelMenuInformarDos");
moverIcono("mostrarMenuSeguinos","labelMenuSeguinos","labelMenuSeguinosDos");
moverIcono("mostrarMenuMedios","labelMenuMedios","labelMenuMediosDos");

let productos =
[    
    {
        id:1,       
        sotck:15,
        precio:226699,
        tipo:"notebook",
        img:'./img/notebook1.jpg',
        descripion:`Notebook Acer Swift 3 i5 11va 14"`,
        detalles:`RENDIMIENTO
 
        Procesador
        Intel Core i5-1135G7 (4C / 8T, 2.4 / 4.2GHz, 8MB)
         
        Graficos
        Gráficos Intel Iris Xe integrados
         
        Chipset
        Plataforma Intel SoC
        Memoria
         
        DDR4-3200 soldado de 4 GB + DDR4-3200 SO-DIMM de 4 GB
        Ranuras de memoria
         
        Una memoria soldada a la placa del sistema, una ranura DDR4 SO-DIMM, compatible con doble canal
         
        Memoria máxima
        Oferta DDR4-3200 de hasta 12 GB (4 GB soldados + 8 GB SO-DIMM)
         
        Almacenamiento
        SSD M.2 de 256 GB 2242 PCIe 3.0x4 NVMe
         
        Soporte de almacenamiento
        Modelos con batería de 45Wh: una unidad, 1x SSD M.2 • SSD M.2 2242 de hasta 512GB • SSD M.2 2280 de hasta 1TB
         
        Ranura de almacenamiento
        Modelos con batería de 45Wh: una ranura M.2 • Una ranura M.2 2280 PCIe Gen 3x4, soporta SSD M.2 2242/2280
         
        Lector de tarjetas
        Lector de tarjetas 4 en 1
         
        Óptico
        Ninguno
         
        Audio Chip
        Audio de alta definición (HD), códec Realtek ALC3287
         
        Altavoces
        Altavoces estéreo, 1.5W x2, Dolby Audio
         
        Cámara
        HD 720p con obturador de privacidad
         
        Micrófono
        2x, Matriz
         
        Batería
        45Wh integrado
         
        Duración máxima de la batería
        Modelos con batería de 45Wh: MobileMark 2018: 7.5 hr Video local (1080p) playback@150nits: 12 hr
         
        Adaptador de corriente
        Punta redonda de 65 W (2 pines, montaje en pared)
         
        DISEÑO
         
        Monitor
        15.6" FHD (1920x1080) TN 250nits Anti-deslumbramiento
         
        Pantalla táctil
        Ninguno
         
        Teclado
        No retroiluminado, Español (LA)
         
        Color de la caja
        Gris Ártico
         
        Tratamiento de superficies
        IMR (In-Mold Decoration by Roller)
         
        Material de la caja
        PC + ABS (arriba), PC + ABS (abajo)
         
        Dimensiones (WxDxH)
        359,2 x 236,5 x 19,9 mm (14,14 x 9,31 x 0,78 pulgadas)
         
        Peso
        A partir de 1,65 kg (3,63 lb)
         
        SOFTWARE
         
        Sistema operativo
        Windows 11 Home 64 idioma único, español
         
        Software incluido
        Prueba de Office
         
        CONECTIVIDAD
         
        Ethernet
        Ninguno
         
        WLAN + Bluetooth
        11ac, 2x2 + BT5.0
         
        Puertos estándar
         
        1x USB 2.0
        1x USB 3.2 Gen 1
        1x USB-C 3.2 Gen 1 (solo admite transferencia de datos)
        1x HDMI 1.4b
        1x Lector de tarjetas
        1x Conector combinado de auriculares / micrófono (3,5 mm)
        1x Conector de alimentación`,
        colores:["CREMA","BLANCO","ROSA","VERDE","GRIS","TURQUESA"]       
    },
    {
        id:2,       
        stock:15,
        precio:839199,
        tipo:"notebook",
        img:'./img/notebook2.png',
        descripion:`Notebook Gigabyte Aero XE5 i7 12va RTX 3070 Ti 16"`,
        detalles:`RENDIMIENTO
        
        Modelo: XE5-73LA934HP

        PROCESADOR
        Marca: Intel / Modelo: Core I7 12700H
        Núcleos: 14/20 / Frecuencia: 4.70 GHz  
        
        GRÁFICOS
        Marca: nVidia / Modelo: GeForce RTX 3070 TI 8Gb GDDR6
        
        MEMORIA
        Capacidad: 16GB (2X8GB) / Tipo: DDR5 SODIMM
        Expansión: Reemplazando Módulos Incluidos, Hasta 2x16Gb
        
        ALMACENAMIENTO
        Capacidad: 1TB / Clase: SSD NVME
        Puerto M2: Si
        
        PANTALLA
        Tamaño: 16" / Resolución: 3840x2400
        
        CONECTIVIDAD
        WiFi: Si, AC / Bluetooth: Si, 5.2
        HDMI: Si / DP: Si / Red: Si
        USB 3.2: 1 / Thunderbolt 4: 2 (Type C)
        Grabadora DVD: No / Lector Memorias: Si
        
        SISTEMA OPERATIVO
        OS: Windows 10
        
        OTRAS ESPECIFICACIONES
        Color: Gris / WebCam: Si HD`,
        colores:["CREMA","BLANCO","ROSA","VERDE","GRIS","TURQUESA"]       
    },
    {
        id:3,       
        sotck:15,
        precio:341319,
        tipo:"notebook",
        img:'./img/notebook3.jpg',
        descripion:`Notebook Enova 14” Core i3 8GB 240GB SSD`,
        detalles:`RENDIMIENTO
        
        Características Generales

        Marca
            
        enova
        
        Modelo
            
        C141EK3-I3ST-W10H
        
        Color
            
        Negro
        Sistema Operativo
        
        Sistema operativo
            
        Windows
        
        Versión
            
        10
        Pantalla
        
        Tamaño
            
        14"
        
        Resolución
            
        1920x1080
        
        Tipo de resolución
            
        Full HD
        
        Pantalla táctil
            
        No
        Cámara
        
        Cámara frontal
            
        Sí
        
        Resolución cámara frontal
            
        1 MP
        Almacenamiento
        
        Capacidad SSD
            
        240 GB
        Memoria RAM
        
        Capacidad
            
        8 GB
        
        Estructura
            
        LPDDR4
        
        Velocidad
            
        2133Mhz
        Procesador
        
        Modelo
            
        Intel i3-1005G1
        
        Línea
            
        Core i3
        
        Cantidad de núcleos
            
        2
        
        Velocidad
            
        1.2 GHZ - 3.4 GHZ
        Batería
        
        Capacidad
            
        3350mAh
        
        Tipo
            
        Ion de litio
        
        Duración
            
        4 - 5 Horas
        Conectividad
        
        Wi-Fi
            
        Sí
        
        USB
            
        Sí
        
        USB-C
            
        Sí
        
        HDMI
            
        Sí
        
        VGA
            
        No
        
        Bluetooth
            
        Sí
        
        Entrada para auriculares
            
        Sí
        
        Entrada para micrófono
            
        Sí
        
        Puerto de red
            
        No
        
        Lector de tarjetas de memoria
            
        Sí
        
        Lector de huella digital
            
        No
        Teclado
        
        Teclado en español
            
        Sí
        
        Teclado numérico
            
        No
        Accesorios
        
        Incluye
            
        Cargador
        Dimensiones del Equipo
        
        Alto
            
        21.9 CM
        
        Ancho
            
        32.3 CM
        
        Peso
            
        1.4 KG
        Generales
        
        SKU
            
        C141EK3-I3ST-W10H`,
        colores:["CREMA","BLANCO","ROSA","VERDE","GRIS","TURQUESA"]            
    },
    {
        id:4,       
        sotck:15,
        precio:299999,
        tipo:"notebook",
        img:'./img/notebook4.jpg',
        descripion:`Notebook Huawei Matebook D14 i5 11va 14`,
        detalles:`RENDIMIENTO
        
        ALMACENAMIENTO

        CAPACIDAD DEL DISCO RÍGIDO: 512 GB
        
        TIPO DE DISCO: SSD
        
        CARACTERISTICAS PRINCIPALES CON PANTALLA TÁCTIL: NO
        
        CONECTIVIDAD BLUETOOTH: SI
        
        HDMI: 1
        
        USB: SI
        
        WI-FI: SI
        
        DIMENSIONES
        
        ALTO : 1.5 CM
        
        ANCHO : 32.2 CM
        
        PESO : 1.38 KG
        
        PROFUNDIDAD : 21.4 CM
        
        MEMORIA
        
        MEMORIA RAM : 8 GB
        
        TIPO DE MEMORIA : DDR4
        
        PANTALLA
        
        RESOLUCIÓN DE LA PANTALLA : 1920 PX X 1080 PX
        
        TAMAÑO DE PANTALLA : 15.6"
        
        PROCESADOR
        
        CANTIDAD DE NÚCLEOS : 4
        
        MARCA DEL PROCESADOR : INTEL
        
        MODELO DEL PROCESADOR : Intel® Core™ i5-1135G7
        
        SISTEMA OPERATIVO
        
        SISTEMA OPERATIVO : WINDOWS 11`,
        colores:["CREMA","BLANCO","ROSA","VERDE","GRIS","TURQUESA"]               
    },
    {
        id:5,       
        sotck:15,
        precio:99999,
        tipo:"notebook",
        img:'./img/notebook5.jpg',
        descripion:`Notebook Lenovo IdeaPad 3 AMD 3020u 14`,
        detalles:`RENDIMIENTO

        Procesador
        AMD 3020e (2C / 2T, 1.2 / 2.6GHz, 1MB L2 / 4MB L3)
        Graficos
        Gráficos AMD Radeon integrados
        Chipset
        Plataforma SoC AMD
        
        Memoria
        DDR4-2400 con soldadura de 4 GB
        Ranuras de memoria
        Memoria soldada a la placa del sistema, sin ranuras
        Memoria máxima
        4 GB de memoria soldada, no actualizable
        
        Almacenamiento
        SSD M.2 2242 de 128 GB PCIe 3.0x2 NVMe
        Soporte de almacenamiento
        Una unidad, SSD M.2 2242 de hasta 256 GB o SSD M.2 2280 de 512 GB
        Lector de tarjetas
        Lector de tarjetas MicroSD
        
        Óptico
        Ninguno
        
        Audio Chip
        Audio de alta definición (HD)
        Altavoces
        Altavoces estéreo, 1.5W x2, Dolby Audio
        Cámara
        0.3MP
        Micrófono
        2x, matriz
        
        Batería
        35Wh integrado
        Duración máxima de la batería
        MobileMark 2018: 7.3 horas
        Adaptador de corriente
        Punta redonda de 45 W (2 pines, montaje en pared)
        
        DISEÑO
        Monitor
        14" HD (1366x768) TN 220nits Antirreflejo
        Pantalla táctil
        Ninguno
        Teclado
        Sin retroiluminación, Español (LA)
        Color de la carcasa
        Azul hielo
        Tratamiento de superficies
        IMR (Decoración en molde por rodillo)
        Material de la caja
        PC + ABS (arriba), PC + ABS (abajo)
        Dimensiones (WxDxH)
        327,1 x 235 x 19,9 mm (12,88 x 9,25 x 0,78 pulgadas)
        Peso
        Alrededor de 1,4 kg (3,09 lbs)
        
        SOFTWARE
        Sistema operativo
        Windows 11 Home 64, Español
        Software incluido
        Prueba de Office
        
        CONECTIVIDAD
        Ethernet
        Ninguno
        WLAN + Bluetooth
        11ac, 2x2 + BT4.2
        Puertos estándar
        2 USB 3.2 de 1.ª generación
        1x HDMI 1.4
        1x lector de tarjetas
        1x conector combinado de auriculares / micrófono (3,5 mm)
        1x conector de alimentación`,
        colores:["CREMA","BLANCO","ROSA","VERDE","GRIS","TURQUESA"]              
    },
    {
        id:6,       
        sotck:15,
        precio:279999,
        tipo:"notebook",
        img:'./img/notebook6.jpg',
        descripion:`Notebook Lenovo IdeaPad 3 AMD Ryzen 7 14`,
        detalles:`RENDIMIENTO
        
        Puerto HDMI: sí
        Bluetooth: sí
        Velocidad del Procesador: amd ryzen 7 5700u (8c/16t, 1,8/4,3 ghz, 4 mb l2/8 mb l3)
        Pantalla Tactil: no
        Puertos opcionales (configurados):1 conector combinado de auriculares/micrófono (3,5 mm)/1 conector de alimentación./1x usb-c 3.2 gen 1 (solo admite transferencia de datos)
        Ethernet: no
        Sistema: windows 11 home 64, español
        Incluye Teclado: retroiluminado, español (la)
        Wi-Fi: 11ac, 2x2
        Desbloqueo con huella dactilar: no
        Peso: a partir de 1,41 kg (3,1 libras)
        Dimensiones: 324,2 x 215,7 x 19,9 mm (12,76 x 8,49 x 0,78 pulgadas)
        Batería: integrado 45wh
        Puerto USB 2.0: 1x usb 2.0
        Gráficos: gráficos amd radeon integrados
        Chipset: plataforma amd soc
        Memoria: ddr4-3200 soldada de 4 gb + so-dimm ddr4-3200 de 8 gb
        Memoria máxima: oferta ddr4-3200 de hasta 12 gb (4 gb soldados + 8 gb so-dimm)
        Almacenamiento: ssd de 256 gb m.2 2242 pcie 3.0x4 nvme
        Altavoces: altavoces estéreo, 1,5 w x2, dolby audio
        Adaptador de corriente: punta redonda de 65 w (2 pines, montaje en pared)
        Color de la caja: abismo azul
        Tratamiento de superficies: imr (decoración in-mold por rodillo)
        Material de la Caja: pc + abs (arriba), pc + abs (abajo)
        Ranuras de memoria: una memoria soldada a la placa del sistema, una ranura ddr4 so-dimm, compatible con dos canales
        Soporte de almacenamiento: modelo con batería de 45 wh: una unidad, 1 ssd m.2 • ssd m.2 2242 hasta 512 gb • ssd m.2 2280 hasta 512 gb
        Óptico: ninguna
        Chip de seguridad: firmware tpm 2.0
        Versión Bluetooth: bt5.0
        Lector de tarjetas: lector de tarjetas 4 en 1
        Cámara: hd 720p con obturador de privacidad
        Monitor: 14" fhd (1920x1080) tn 250nits antirreflejo, 45 % ntsc
        Otra seguridad: obturador de privacidad de la cámara
        HDMI: 1xhdmi 1.4b
        Micrófono Incorporado: 2x, matriz`,
        colores:["CREMA","BLANCO","ROSA","VERDE","GRIS","TURQUESA"]  
                  
    },
    {
        id:7,       
        sotck:15,
        precio:239999,
        tipo:"notebook",
        img:'./img/notebook7.jpg',
        descripion:`Notebook Lenovo IdeaPad Flex 5 Touch AMD Ryzen 3`,
        detalles:`RENDIMIENTO

        Procesador
        AMD Ryzen 3 5300U (4C/8T, 2,6/3,8 GHz, 2 MB L2/4 MB L3)
        
        Gráficos
        
        Gráficos AMD Radeon integrados
        conjunto de chips
        Plataforma AMD SoC
        
        Memoria
        DDR4-3200 soldado de 8GB
        Ranuras de memoria
        Memoria soldada a la placa del sistema, sin ranuras, de dos canales
        Memoria máxima
        Memoria soldada de 8GB, no actualizable
        
        Almacenamiento
        SSD de 256 GB M.2 2242 PCIe 3.0x4 NVMe
        Soporte de almacenamiento
        Una unidad, hasta 512 GB M.2 2242 SSD o 512 GB M.2 2280 SSD
        Ranura de almacenamiento
        Una ranura M.2 2280 PCIe 3.0 x4
        
        Lector de tarjetas
        Lector de tarjetas 4 en 1
        
        Óptico
        Ninguna
        
        Microprocesador de audio
        Audio de alta definición (HD)
        
        Altavoces
        Altavoces estéreo, 2W x2, optimizados con Dolby Audio
        
        Cámara
        HD 720p con obturador de privacidad
        
        Micrófono
        2x, matriz
        
        Batería
        Integrado 52.5Wh
        Duración máxima de la batería
        MobileMark 2014: 12 h Reproducción de video local (1080p) a 150 nits: 12 h
        
        Adaptador de corriente
        Punta redonda de 65 W (2 pines, montaje en pared)
        
        DISEÑO
        
        Monitor
        FHD de 14" (1920 x 1080) TN 220 nits Brillante, táctil
        Pantalla táctil
        Multitáctil de 10 puntos
        Teclado
        Sin retroiluminación, español (LA)
        Color de la caja
        gris platino
        Tratamiento de superficies
        Pintura Metálica
        Material de la Caja
        PC-ABS (arriba), PC + GF (abajo)
        Lápiz
        Bolígrafo digital Lenovo sin batería
        Dimensiones (An. x Pr. x Al.)
        321,5 x 217,5 x 17,9 mm (12,65 x 8,56 x 0,70 pulgadas)
        Peso
        Alrededor de 1,5 kg (3,31 libras)
        
        SOFTWARE
        Sistema operativo
        Windows 11 Home 64 Idioma Único, Español
        Software incluido
        Prueba de oficina
        
        CONECTIVIDAD
        ethernet
        Sin Ethernet a bordo
        WiFi + Bluetooth
        WiFi 5 11ac, 2x2 + BT5.0
        NFC
        Ninguna
        Puertos estándar
        1x USB 3.2 Gen 1
        1x USB 3.2 Gen 1 (siempre encendido)
        1x USB-C 3.2 Gen 1 (admite transferencia de datos y Power Delivery 3.0)
        1xHDMI 1.4b
        1x lector de tarjetas
        1 conector combinado de auriculares/micrófono (3,5 mm)
        1 conector de alimentación.
        
        SEGURIDAD Y PRIVACIDAD
        Chip de seguridad
        Firmware TPM 2.0
        Lector de huellas dactilares
        Estilo táctil
        Otra seguridad
        Obturador de privacidad de la cámara`,
        colores:["CREMA","BLANCO","ROSA","VERDE","GRIS","TURQUESA"]  
                  
    },
    {
        id:8,       
        sotck:15,
        precio:749999,
        tipo:"notebook",
        img:'./img/notebook8.jpg',
        descripion:`Notebook Lenovo Legion 5 Pro AMD Ryzen 7 RTX 3070`,
        detalles:`RENDIMIENTO

        Processor AMD Ryzen 7 5800H (8C / 16T, 3.2 / 4.4GHz, 4MB L2 / 16MB L3)
        
        Graphics NVIDIA GeForce RTX 3070 8GB GDDR6, Boost Clock 1560 / 1620MHz, TGP 140W
        
        Chipset AMD SoC Platform
        
        Memory 2x 8GB SO-DIMM DDR4-3200
        
        Memory Slots Two DDR4 SO-DIMM slots, dual-channel capable
        
        Max Memory Up to 32GB DDR4-3200 offering
        
        Storage 512GB SSD M.2 2242 PCIe 3.0x4 NVMe
        
        Storage Support Up to two drives, 2x M.2 SSD
        
        • M.2 2242 SSD up to 512GB
        
        • M.2 2280 SSD up to 1TB
        
        Card Reader None
        
        Optical None
        
        Audio Chip High Definition (HD) Audio, Realtek ALC3306 codec
        
        Speakers
        
        Stereo speakers, 2W x2, Nahimic Audio
        
        Camera HD 720p with E-camera
        
        Shutter Microphone 2x, Array
        
        Battery Integrated 80Wh
        
        Max Battery Life MobileMark 2018: 4.2 hr (discrete mode) or 8.1 hr (hybrid mode)
        
        Power Adapter 300W Slim Tip (3-pin)
        
        DESIGN
        
        Display 16" WQXGA (2560x1600) IPS 500nits Anti-glare, 165Hz, 100% sRGB, Dolby Vision, HDR 400, FreeSync, G-SYNC, DC dimmer
        
        Touchscreen None
        
        Color Calibration
        
        Factory Color Calibration
        
        Keyboard White Backlit, Spanish (LA)
        
        Case Color Storm Grey (Top), Black (Bottom)
        
        Surface Treatment Anodizing
        
        Case Material Aluminium (Top), Aluminium (Bottom)
        
        Dimensions (WxDxH) 356 x 260.4-264.4 x 21.7-26.85 mm
        
        Weight Around 2.45 kg
        
        SOFTWARE
        
        Operating System Windows 11 Home 64 Single Language, Spanish Bundled Software Office Trial
        
        CONNECTIVITY
        
        Ethernet 100/1000M WLAN + Bluetooth Wi-Fi 6 11ax, 2x2 + BT5.1 Standard Ports 3x USB 3.2 Gen 1 1x USB 3.2 Gen 1 (Always On) 1x USB-C 3.2 Gen 2 (support data transfer and DisplayPort 1.4) 1x USB-C 3.2 Gen 2 (support data transfer, Power Delivery and DisplayPort 1.4) 1x HDMI 2.1 1x Ethernet (RJ-45) 1x Headphone / microphone combo jack (3.5mm) 1x Power connector
        
        SECURITY & PRIVACY
        
        Security Chip Firmware TPM 2.0
        
        Fingerprint Reader None
        
        Other Security E-Camera shutter`,
        colores:["CREMA","BLANCO","ROSA","VERDE","GRIS","TURQUESA"]  
                  
    }
    
    
];

let arregloCarrito = JSON.parse(localStorage.getItem('carrito')) ?? [];

function buscarProducto(id,lista){
    let productoBuscado = lista.find(element =>element.id==id);
    return productoBuscado
}

function mostrarProductos () {
    const getEvent = document.querySelector(`#event`);
    productos.forEach(element => {  
        getEvent.innerHTML+=`<div class="mostrarProductos" id="mostrar${element.id}">
                            <img src="${element.img}" alt="">
                            <p>${element.descripion}</p>
                            <p>$${element.precio} <p/>                           
                            <button class="botonComprar" id="${element.id}"> Comprar </button>    
                        </div>`;                  
    });
    const getTodosDivProductos = document.querySelectorAll(`#event div`); 
    getTodosDivProductos.forEach (element =>{
        element.onclick = (e)=>{
            console.log(e.target.className);
            if (e.target.className!=="botonComprar"){
                let cualEs = element.id;
                let buscado = buscarProducto(cualEs.slice(-1),productos);
                console.log(buscado);
                getEvent.innerHTML="";
                getEvent.innerHTML+=`<div class="mostrarProductosSolo" id="mostrar${buscado.id}">
                <div class="mostrarProductoSoloDiv1">   
                    <img src="${buscado.img}" alt="">     
                    <div class="mostrarProductoSoloDiv1Datos">           
                            <p>${buscado.descripion}</p>
                            <p>$${buscado.precio} <p/>                                     
                            <button class="botonComprar" id="${buscado.id}"> Comprar </button>     
                    </div>           
                </div>
                <div class="detalles">
                <p>Detalles : ${buscado.detalles} </p>  
                </div>         
            </div>`;   
            let getBotonPag = document.querySelector(`.botonComprar`);
            getBotonPag.onclick = (e)=>{
                e.preventDefault();        
                let buscado = buscarProducto(e.target.id,productos);       
                let comprobar = buscarProducto(buscado.id,arregloCarrito);                
                if (comprobar === undefined) {
                    buscado.cantidad=1;
                    arregloCarrito.push(buscado); 
                    localStorage.setItem('carrito', JSON.stringify(arregloCarrito));           
                }
                else 
                    {
                        let index = arregloCarrito.findIndex(element =>element.id === buscado.id);
                        arregloCarrito[index].cantidad +=1;
                        localStorage.setItem('carrito', JSON.stringify(arregloCarrito));
                    }        
                }

            }            
        }
    });
    const getTodosBotones = document.querySelectorAll(`#event .mostrarProductos button`);
    getTodosBotones.forEach(element=>{
        element.onclick = (e) => {
            e.preventDefault();        
            let buscado = buscarProducto(e.target.id,productos);       
            let comprobar = buscarProducto(buscado.id,arregloCarrito);                
            if (comprobar === undefined) {
                buscado.cantidad=1;
                arregloCarrito.push(buscado); 
                localStorage.setItem('carrito', JSON.stringify(arregloCarrito));           
            }
            else 
                {
                    let index = arregloCarrito.findIndex(element =>element.id === buscado.id);
                    arregloCarrito[index].cantidad +=1;
                    localStorage.setItem('carrito', JSON.stringify(arregloCarrito));
                }        
            console.log(arregloCarrito);
        }    
    });
}

function checkNumero (numero) {                             // para checkear que sea solo numeros
    if (/^[0-9]+$/.test(numero)){        
        return true
    }
    return false
}


function checkTexto (valor) {                                   // para checkear que sea texto
    if (/^[0-9]+"Mas"$/.test(valor)){               
        return true
    }
    return false
}

const getEvent = document.querySelector(`#event`);
const carritoVer = document.querySelector('#carritoVisual i');
const getVerCarrito = document.querySelector('#getVerCarrito');
const getVerCarritoTotal = document.querySelector('#totalCarrito');

function verCarrito(){
    let total = 0;        
        getEvent.innerHTML="";
        getVerCarrito.innerHTML="";    
        if (arregloCarrito.length!==0){
            if (arregloCarrito.length < 3){
                getVerCarrito.style.height="400px"
            }
            arregloCarrito.forEach(element =>{                
                getVerCarrito.innerHTML+=`<div class="mostrarProductosCarrito">
                                    <img src="${element.img}" alt="">                                                                
                                    <p>Tipo : ${element.tipo} </p>
                                    <p>Colores : ${element.colores}</p>  
                                    <button id="${element.id}Menos" class="botonSumRes">-</button>
                                    <P>Cantidad: ${element.cantidad} </p>
                                    <button id="${element.id}Mas" class="botonSumRes">+</button>
                                    <p>precio : $${element.precio*element.cantidad} <p/> 
                                    <button  id="${element.id}" class="botonEliminar">Eliminar </button>                                                       
                                </div>`;                                                           
                total+=element.cantidad*element.precio;                                 
            });             
            getVerCarritoTotal.innerHTML=`<p>Total : $${total} </p>
                                    <button> Finalizar Compra </button> `;  
            const getBotonesEliminar = document.querySelectorAll(".mostrarProductosCarrito button"); 
            getBotonesEliminar.forEach(element=>{
                element.onclick= (e)=>{
                    e.preventDefault();
                    let id = (e.target.id);                    
                    if (checkNumero(id)){
                        id=parseInt(id);
                        arregloCarrito = arregloCarrito.filter(ele=> ele.id !== id );
                        localStorage.setItem('carrito', JSON.stringify(arregloCarrito));                  
                        verCarrito();  
                    }
                    else{
                        if(e.target.id.endsWith('Mas')){                            
                            let idAux=parseInt(e.target.id.replace(/[^0-9]+/g, "")); 
                            let indexAux =arregloCarrito.findIndex(element =>element.id === idAux);                            
                            arregloCarrito[indexAux].cantidad+=1;
                            localStorage.setItem('carrito', JSON.stringify(arregloCarrito)); 
                            verCarrito();
                        }     
                        else{
                            
                            let idAux=parseInt(e.target.id.replace(/[^0-9]+/g, ""));                            
                            let indexAux =arregloCarrito.findIndex(element =>element.id === idAux);
                            console.log(arregloCarrito);
                            console.log(indexAux);
                            if (arregloCarrito[indexAux].cantidad>1){
                                arregloCarrito[indexAux].cantidad-=1;
                                localStorage.setItem('carrito', JSON.stringify(arregloCarrito)); 
                                verCarrito();
                            }                            
                        }                 
                    }                                                 
                }            
            });        

        }
        else {
            getVerCarrito.style.height="400px";
            getVerCarritoTotal.innerHTML="";              
            getEvent.innerHTML=`<div class="carritoVacio"><p class="pCarritouno"> Tu carrito esta vacio </p>
            <p class="pCarritoDos">Descubrí las categorías del sitio y elegí los mejores productos.</p>
            <button><a href="./index.html">Segui Comprando</a></button></div>`
        }  
}



 function mostrarCarrito (){    
    carritoVer.onclick = (e)=> { 
        e.preventDefault(); 
        getVerCarrito.style.display="flex";        
        verCarrito();
    }
}


    

    


/* programa principal */ 


 mostrarProductos ();
 mostrarCarrito();


















        

