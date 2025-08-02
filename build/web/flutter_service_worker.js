'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "38f28f01c1785e33ac44e2614843e877",
"assets/AssetManifest.bin.json": "88ce1f4a307e5438854a1aa3e2736847",
"assets/AssetManifest.json": "ade8755063ef675ba9e4e8ae5a478344",
"assets/assets/a%2520matter%2520of%2520trust-%2520B%2520Joel.pdf": "9e16221114a8fa282efe5f1b87d9b2c2",
"assets/assets/A%2520soldier%2520of%2520fortune.pdf": "eca6f2b4dde41d94b4d8ffaff1587a2b",
"assets/assets/After%2520Midnight.pdf": "1d1f15479e9386641db4d03099d832a5",
"assets/assets/Aicha.pdf": "98d8492c9cbe61c36280b0b92e2b3f62",
"assets/assets/Ain%2520no%2520sunchine.pdf": "56191e77010832b669eb193aaf9e9c5f",
"assets/assets/Aint%2520no%2520sunshine%2520chords%2520(1).pdf": "8a53df64d527518e0882e11f509f1946",
"assets/assets/All%2520right%2520now%2520free.pdf": "64ee42bc09b977065a0576030a2eb0cf",
"assets/assets/Angels.pdf": "cc1897353b8582eb20ea2c1d58d9e344",
"assets/assets/Angie%2520rolling%2520stones.pdf": "d300ecb6187838f4ded3190b88425649",
"assets/assets/Another%2520Brick%2520in%2520the%2520wall.pdf": "19137c9f0474d54edc6e06a5acb1cb7f",
"assets/assets/Another%2520Day%2520in%2520Paradise.pdf": "e1d58f4636d3d296c37efd7433fa6d60",
"assets/assets/Au%2520Paradis.pdf": "84a9c6f68a2435d4310d6a2d69a48310",
"assets/assets/Ave%2520Maria.pdf": "9f8009b5f574dbd82901ea89e44bcdbf",
"assets/assets/Baby%2520can%2520i%2520hold%2520you.pdf": "0e0980dab6a550805600b25210f3ba4e",
"assets/assets/Baby%2520that_s%2520you.pdf": "71601097f181ee718fe107c8dffd1a81",
"assets/assets/Baby%2520What%2520You%2520Want%2520Me%2520To%2520Do.pdf": "0187b82556e2de52c66b87b2ba9a2fdb",
"assets/assets/Back%2520to%2520black.pdf": "c8cc16c4d61f280baf0e54718c796dcc",
"assets/assets/Beast%2520of%2520burden.pdf": "17da38c9bef21ff387b100fb7f1b88fb",
"assets/assets/Beds%2520are%2520burning.pdf": "6618b4f0bcb1c5e049ee87677a4aa2c9",
"assets/assets/Before%2520You%2520Accuse%2520Me.pdf": "7ba91b4caa9b2e28c363fbfeaa658222",
"assets/assets/Big%2520jet%2520plane.pdf": "78262d202ebe5dbf96282004181d40fa",
"assets/assets/Black%2520Magic%2520Woman.pdf": "594bc835df6a7c94ac3693961a0a763b",
"assets/assets/Brain%2520damage%2520P%2520floyd.pdf": "1bf4fa064680cce2fc47aae0be59e0fc",
"assets/assets/Brain%2520Damage.pdf": "1871357d91a06953ac91522da591320e",
"assets/assets/Breathe%2520-%2520P%2520Floyd.pdf": "65b79a194e3c7bb1dc9f3d65ffeb374a",
"assets/assets/Breathe.pdf": "29835fadb69aed0213cc15b975c59dd9",
"assets/assets/Brick%2520in%2520the%2520Wall.pdf": "f8d6654a58dc96744938066834974707",
"assets/assets/bring%2520it%2520home%2520to%2520me.pdf": "55d84fd193fa96a94382cfb06964ea07",
"assets/assets/Brown%2520Sugar.pdf": "82ff12b45c3de0677f46e6ed0710ab77",
"assets/assets/Budapest.pdf": "807b3d287da34fe726bebb955f36e918",
"assets/assets/Bye%2520Bye%2520Love.pdf": "ed3362f6c8d2cc339ce4c0ce40341dd0",
"assets/assets/California%2520dreamin.pdf": "3d2eeb8db5c3b01e8a0d52163e6c47b3",
"assets/assets/California%2520Girls.pdf": "dbe24164d4aadbbf3c9a0d2276a87d27",
"assets/assets/Californication.pdf": "a0b37fa6abebf531dcbd87c8901d9b34",
"assets/assets/Can%2520t%2520get%2520it%2520out%2520of%2520my%2520head.pdf": "2908f3e9b58574151c36817f31b35edc",
"assets/assets/Cendrillon%2520Telephone.pdf": "2640b28ffedbedf4a7cff4c392a0652e",
"assets/assets/Ces%2520idees%2520la.pdf": "3890ff38557adad2a0bc203dd503ab1d",
"assets/assets/Cest%2520comme%2520c%25CC%25A7a%2520chords.pdf": "d7d4665497691b96bb6081d5fd915858",
"assets/assets/China%2520girl.pdf": "8265d66d3cda58ab07efc12ebb1eafce",
"assets/assets/Comfortably%2520Numb.pdf": "6c18caf18c1463a68cafc28cc6c276ea",
"assets/assets/Comme%2520un%2520avion%2520sans%2520aile.pdf": "b6ad59716921d28395d7390baa1c7a82",
"assets/assets/Couleur%2520Menthe%2520a%2520l%2520eau.pdf": "531065deeabbb7390f0e33c64b37fce4",
"assets/assets/Couleur%2520menthe%2520a%25CC%2580%2520leau%2520chords.pdf": "d5b1c0f8a2fbd65e02f7ae84ac5b91f9",
"assets/assets/Crazy%2520little%2520thing%2520called%2520love%255B1%255D.pdf": "86dcbf892494c64eb76c5f8164ffc4b6",
"assets/assets/Crazy%255B1%255D.pdf": "b4e6653fb7c316e16307cd34e0bf9313",
"assets/assets/Creep.pdf": "261b5bc1c621808b26f241df3a3020ea",
"assets/assets/Cry%2520me%2520a%2520river.pdf": "8ec8a3ea0d2816d7e2a3e49471cb2c0a",
"assets/assets/C_est%2520e%25CC%2581crit.pdf": "1bdb9c3cd478d2b2f67d588127f1e844",
"assets/assets/Dirty%2520Old%2520Town(1).pdf": "f86d303499f886d1e867abb036fc6581",
"assets/assets/Dirty%2520old%2520town.pdf": "2ca31ae173e60c8124446ee70e4488bd",
"assets/assets/divine%2520idylle%2520chords%2520(1).pdf": "6ea2bb8f4487434170ed7117b944275f",
"assets/assets/Don%2520t%2520answer%2520me%2520(re).pdf": "89dd6ef8135dc02fd85218628ec03436",
"assets/assets/Don%2520t%2520answer%2520me.pdf": "af37450531648bf7647c7aef0e03f29d",
"assets/assets/Don%2520t%2520bring%2520me%2520Down.pdf": "652efa070876d450827816284f5789e5",
"assets/assets/Don%2520t%2520let%2520me%2520down.pdf": "9c421291e88e7472e12e1e0edd9dcada",
"assets/assets/Don%2520t%2520Stop.pdf": "72e1222aa579629ca710d627cb44ad16",
"assets/assets/Dont%2520let%2520me%2520be%2520misunderstood%2520(Ve%2520A.%2520Brown).pdf": "f7f096fc6efed647d1e1371f0de62ddd",
"assets/assets/Dont%2520let%2520me%2520down%2520BDao.pdf": "78763614c26e84ad43b36f1ae013f443",
"assets/assets/Dont%2520let%2520me%2520down.pdf": "a55d3c52fee2f1618cf02137e6c472ec",
"assets/assets/Dont%2520play%2520that%2520song.pdf": "7b7c3f77b3834a43064bc3df20ef6867",
"assets/assets/Dont%2520You%2520Forget%2520About%2520Me%2520chords.pdf": "3db734989276c58a2e46cad4426cfede",
"assets/assets/dors%2520Pagny.pdf": "4b5310a888fa385e2caa592b5f6a7883",
"assets/assets/Dors.pdf": "e1ff58ff0ff9665a3793ae1c5a44e124",
"assets/assets/Dream%2520a%2520little%2520dream%2520of%2520me.pdf": "d274ed9325c6b5f77f48bea5654951af",
"assets/assets/Drive%2520my%2520car.pdf": "8e09733c2ec9ebc6c43cbc6b8f0f019c",
"assets/assets/Dust%2520in%2520the%2520Wind.pdf": "a4530df0b3177b1b3d58fb810c0bcd4f",
"assets/assets/E%25CC%2581teins%2520la%2520lumie%25CC%2580re%2520chords.pdf": "d736f289c869adb3f3f378e470990c10",
"assets/assets/EMMENEZ%2520moi.pdf": "51546544550c73a2c49824f83c8a0e0f",
"assets/assets/Envole%2520moi(1).pdf": "61a8a52323ab061023a6bfce64c99129",
"assets/assets/envole%2520moi.pdf": "7a19dfc13eb429f6a425eb051983ebf2",
"assets/assets/Esprit%2520Grande%2520Prairie.pdf": "b9712a2ff063650a2e07fcccf7108439",
"assets/assets/Eteints%2520la%2520Lumiere.pdf": "81fdaa1f8ef364b8af18c2d472cea2f1",
"assets/assets/Every%2520breathe%2520you%2520take.pdf": "dfcbfcda8724fd833c0f4e6ce05593c3",
"assets/assets/Eye%2520In%2520The%2520Sky(1).pdf": "da11e3fd78dd8e0ff249317f4f9abc78",
"assets/assets/Eye%2520in%2520the%2520sky.pdf": "7aee34995da0e68f853f73b12512d9c7",
"assets/assets/Feel%2520Robbie%2520Williams.pdf": "d960ed3877135c8a9c6ddcac65a3fed7",
"assets/assets/Fever%2520_%2520Peggy%2520Lee.pdf": "84371423cf88b84b6300bc5b2a51ef7b",
"assets/assets/food%2520for%2520though.pdf": "a52a69d20cf0c39da189d253220bda9f",
"assets/assets/Forever%2520young.pdf": "cb2c72ce9abe4c6d5fe588c148590069",
"assets/assets/Fortunate%2520song.pdf": "4b4753380aaa06455595a3b6fec2bba8",
"assets/assets/Get%2520it%2520on%2520-%2520PCo.pdf": "59f93bc9121c3df79a629b2d629cc741",
"assets/assets/Get%2520it%2520on%2520Guitar.pdf": "7eab399dd6c44980ffc67c21f673e1f7",
"assets/assets/Get%2520it%2520on.pdf": "28f3448570721cfecab206db1de71ec7",
"assets/assets/Give%2520me%2520one%2520reason.pdf": "3082c95ca37a6cd53e2cd226d3f9536f",
"assets/assets/Go%2520your%2520own%2520way-%2520Fleetwood%2520mac.pdf": "52a813a3fd55924fa5cc6dc30a63c4ac",
"assets/assets/good%2520times%2520-%2520R%2520coolidge.pdf": "31b0ca9e45978f5b4b319f86bed0edb6",
"assets/assets/Got%2520you%2520on%2520my%2520mind.pdf": "4f1c04305283c1ab8cd38396a1cfacd5",
"assets/assets/hallelujah%2520en%2520LA%2520majeur.pdf": "ec3b8b021a5a7dbf3acd5133d1ddc33d",
"assets/assets/Hallelujah.pdf": "8ed5b9420a8e3d5a7832ebf995dc0764",
"assets/assets/Happy%2520together%2520-%2520The%2520turtles-2.pdf": "e4aa96e660243907c327fa13e315a6d3",
"assets/assets/Happy%2520Together.pdf": "37e3f6ff56cb9546a906e5f16e898bc6",
"assets/assets/Hard%2520Days%2520Night.pdf": "10da6b7c719537e625ab6006e61799d4",
"assets/assets/Have%2520You%2520Ever%2520Seen%2520The%2520Rain.pdf": "a43d81dbc005831d43116c298d6e7d16",
"assets/assets/Havent%2520Met%2520You%2520Yet.pdf": "73e31b65f5c24869668b25a382c7837a",
"assets/assets/Heading%2520for%2520a%2520fall.pdf": "e54bd0a3ba0472824e629b282bb81d4c",
"assets/assets/Heart%2520of%2520gold.pdf": "d17aec26a9f9dc22f2135553f1799bc0",
"assets/assets/Hell%2520is%2520for%2520children%2520chords.pdf": "6870345f0984874ecc56bd3568709fa9",
"assets/assets/Hello%2520my%2520lover.pdf": "ab1fb56b9397bad84bb47fc512c0aa31",
"assets/assets/Here%2520Comes%2520The%2520SUN.pdf": "5208b7970316ea21648932a6bdf171ed",
"assets/assets/Heroes.pdf": "b3bfef70fb23e720c9da620bebd1443f",
"assets/assets/Hey%2520its%2520ok.pdf": "42e3dbbeed882ccc634dc3ebc69e97fc",
"assets/assets/Hey%2520Joe.pdf": "a984d67b0a61ad0d5c1c2215850a0222",
"assets/assets/Hey%2520jude.pdf": "a294f1a3419c8b1de64db0b4c25ea1bf",
"assets/assets/Hit%2520the%2520road%2520Jack.pdf": "3b042304848b46f472765b28444acee5",
"assets/assets/Honky%2520Tonk%2520Women.pdf": "3c09f7d56cb7513dafce84a9ec6d034a",
"assets/assets/HOTEL%2520CALIFORNIA.pdf": "6ec22c88c7883b231c17fc7c13cf8005",
"assets/assets/Hungry%2520heart.pdf": "88937f628705fd57fcad9cdb5540d4ee",
"assets/assets/I%2520can%2520see%2520clearly%2520now.pdf": "c8d6f22ce635aeeaebeaf1f791f59dd2",
"assets/assets/I%2520got%2520you%2520babe.pdf": "feeefd3b787032763bf5e9db06ec27c7",
"assets/assets/I%2520got%2520you%2520babe_.pdf": "eca7046cfd82ae5cb3f2c288aa38ede8",
"assets/assets/I%2520Heard%2520Through%2520the%2520Grapevine.pdf": "4fdc2dad69e3ccaeebf1cbd0eb7b8262",
"assets/assets/I%2520put%2520a%2520spell%2520on%2520you.pdf": "fadf0db4b3c9917376e5799a9f1c4731",
"assets/assets/I%2520saw%2520her%2520standing%2520there.pdf": "6d48d826c6d794987a8fd4a704c5e596",
"assets/assets/I%2520shall%2520be%2520released%25202.pdf": "5191fd6077d4f988d0538d5bfee3ae8b",
"assets/assets/i%2520still%2520have%2520n_t%2520found%2520U2.pdf": "bf4f1e793cd1102dfa1f9bfa46b00d94",
"assets/assets/i%2520want%2520to%2520break%2520free%2520in%2520C.pdf": "f49628f3dc58fb19c7a3240af3290722",
"assets/assets/I%2520want%2520to%2520break%2520free-%2520Queen.pdf": "9603d5485f6dc115060de3c48a902ab9",
"assets/assets/I%2520Want%2520to%2520Break%2520Free.pdf": "e2a88306b46e144c75dc47714b319b5c",
"assets/assets/I%2520want%2520you%2520back.pdf": "5f8eb1c5ad3786f40a483d2b61b3cebe",
"assets/assets/Id%2520rather%2520go%2520blind.pdf": "3dc03484fc9a1b657ec31c76b80eda93",
"assets/assets/Imagine.pdf": "4ba2c7ac6e25354a6a0ca99244cbbc1c",
"assets/assets/in%2520My%2520Place.pdf": "b446d244653979f3f4ffbb2773845d36",
"assets/assets/In%2520the%2520air%2520tonight.pdf": "f5e8fbbe82ce71d042ceab372f7ec9e9",
"assets/assets/In%2520the%2520Name%2520of%2520Love.pdf": "9addd6ed2d9c9d68c101d384d27392e3",
"assets/assets/Instant%2520Karma.pdf": "abe592c42859ec1a39528d2cd70aae76",
"assets/assets/Island%2520in%2520the%2520sun%2520-%2520Weezer.pdf": "e19f092c6f1c047855b205eeddc81715",
"assets/assets/Island%2520in%2520the%2520Sun.pdf": "21bbf1dd2c21ac9ab4cc80863559340b",
"assets/assets/Isnt%2520she%2520lovely(1).pdf": "07a5bdcb3a58bd4b3ad12c7cf631296c",
"assets/assets/isnt%2520she%2520lovely.pdf": "9b39451972f0395a01f9e1712098f625",
"assets/assets/It%2520hurts%2520me%2520too-E%2520Clapton.pdf": "9044e16dc9cfb45e1fb3a59d5c6dbd65",
"assets/assets/It%2520s%2520So%2520Easy.pdf": "ec883299c10a1d25433ab15a05b358b3",
"assets/assets/its%2520all%2520over%2520now%2520baby%2520blue.pdf": "9eaa5f6df5061ef01cb9b04cd8dab6f1",
"assets/assets/Its%2520allright-%2520Etta%2520James.pdf": "4931684a528d16e7544583a3962c137f",
"assets/assets/Its%2520only%2520mystery.pdf": "051ae295323abe472cf9231efd2fd336",
"assets/assets/Its%2520probably%2520me-%2520Sting.pdf": "7bc28f85754fb356143bca0d8fe40a24",
"assets/assets/its%2520so%2520easy%2520chords%2520(2).pdf": "92eb1e0f5ff0f0f3cf74f847a0afac6b",
"assets/assets/I_ll%2520stand%2520by%2520you%2520en%2520D.pdf": "3db33d4d6ec419c41af5007e51151fc5",
"assets/assets/I_ll%2520stand%2520by%2520you.pdf": "ce6d2d227da39991c0ebb93aadfe7d21",
"assets/assets/I_m%2520an%2520african%2520in%2520Paris.pdf": "4437f011d64a858de340332456037ce5",
"assets/assets/Jack%2520%2520L.%2520Bertignac.pdf": "c30e479e749e13b67e6c38813eee6a57",
"assets/assets/Jack.pdf": "91f5ba99db2fb968f46fb7de515d3851",
"assets/assets/Je%2520me%2520souviens%2520de%2520tout.pdf": "9836be029515705a42dc0a1f8f771d50",
"assets/assets/Je%2520m_en%2520vais.pdf": "9aaa73ef25e6e42b3f841d916f093ee4",
"assets/assets/Je%2520te%2520Pardonne.pdf": "9079a6bc1719db431d9d7f6c50042c41",
"assets/assets/Jenny%2520fran%25E2%2580%25A1ais%2520De%2520Palmas.pdf": "df895a5a5efd31069c3158ad65142e84",
"assets/assets/Jimmy%2520Moriarty.pdf": "9ecc6b6ffcfe7537cd9cd93882416571",
"assets/assets/Johnny%2520and%2520Mary.pdf": "8e286b25d3ee953f357be864c695b35e",
"assets/assets/Jumping%2520Jack%2520Flash.pdf": "ec886f100e54f57baf69ee779ad88776",
"assets/assets/Just%2520like%2520tom%2520thumb_s%2520blues-%2520B%2520Ferry.pdf": "bde7ac05c5def345d29c3d0686f0ea39",
"assets/assets/Just%2520the%2520two%2520of%2520us%2520chords-1.pdf": "e2d1724f931e37219f23a43ad370092e",
"assets/assets/Juste%2520une%2520Illusion.pdf": "1ffb472c174c928abfabc7c821cef90e",
"assets/assets/Killing%2520me%2520Softly.pdf": "40385b1338c5a97775163dde870de2bf",
"assets/assets/Kingston%2520town%2520.pdf": "367865ecffdb68581b188d0bd2bc83f7",
"assets/assets/Knock%2520on%2520Heaven%2520s%2520Door.pdf": "18bb8d8774f475043c0f20b3c10bbed3",
"assets/assets/Knock%2520on%2520heaven_s%2520doorBOB%2520DYLAN.pdf": "1a7643fff1d854a6d8436a6701ce035d",
"assets/assets/Knock%2520on%2520Wood.pdf": "9a0cd22ff198592a90e13954f662624b",
"assets/assets/L%2520Etranger.pdf": "21ec6fc9206df6957e87af2259079afd",
"assets/assets/L%2520indien.pdf": "66039a671e9f9450a830a5f7bba72224",
"assets/assets/La%2520ballade%2520Nord%2520Irlandaise%2520C.pdf": "3fd441f90e7925133d7981f8e58d9bf3",
"assets/assets/La%2520belle%2520vie%2520-%2520S%2520Distel.pdf": "8c4c0f99d2390ea4112462dc8c116395",
"assets/assets/La%2520dame%2520de%2520hte%2520savoie.pdf": "b7c4be086ebb8bc30f7e3c42347ebec5",
"assets/assets/La%2520derniere%2520seance%2520D.pdf": "f7f1e8f0adf9bb9e1214b5ca41ba4d9b",
"assets/assets/La%2520Groupie%2520Du%2520Pianiste.pdf": "af8247e00416f4f70903a1bb4159b335",
"assets/assets/La%2520musique%2520que%2520jaime%2520chords.pdf": "b94ea64574328cfdeec7bffa8d8e07bd",
"assets/assets/La%2520ou%2520je%2520t_emmererai.pdf": "72f530a1aa12fba729c337e33553c4fc",
"assets/assets/La%2520seine.pdf": "d1d72b1bcc9cd7057201ea8dcd97b254",
"assets/assets/La%2520vie%2520en%2520rose.pdf": "d2329b67fe502ecffccbbf91ad506bb2",
"assets/assets/Laila.pdf": "1957ce0a459871bcfe4610640cda02c0",
"assets/assets/Laissons%2520Entrer%2520le%2520Soleil(1).pdf": "0a93565a097468bdfabbb21353894b88",
"assets/assets/laissons%2520entrer%2520le%2520soleil.pdf": "7b55694c4d5dbaf69a846f22c7e7c6f9",
"assets/assets/Laura%2520(%2520en%2520A).pdf": "899e792de353831317bb286f7cb76101",
"assets/assets/Laura.pdf": "3f78559a09591ba6729593ccca7a2f7e",
"assets/assets/Le%2520blues%2520de%2520toi%2520F.pagny.pdf": "2f2deae77f2f475a5f33b8278c5c6fa0",
"assets/assets/Le%2520jour%2520s_est%2520leve%25CC%2581.pdf": "2a76a3442519bbaa7b29d1a157f67a0e",
"assets/assets/Le%2520pe%25CC%2581nitencier%2520chords.pdf": "f8fe1335470a0411bd355f7fd0875edb",
"assets/assets/Le%2520sud%2520chords.pdf": "4e26678b2e1198df8be9de7dbe321ad8",
"assets/assets/le%2520sud%2520in%2520C.pdf": "c0b8f40b8eccf9ae3e7c240d788d7915",
"assets/assets/LE%2520SUD%2520Nino%2520Ferrer.pdf": "d0b44895591bf1642a3372ac947dace9",
"assets/assets/Les%2520cactus.pdf": "82cfbd7b05f301a5fc2e97760c0e4305",
"assets/assets/Les%2520champs%2520elysees.pdf": "59ba0b9106fba3ccf5260556d0bacb22",
"assets/assets/LEs%2520COPAINS%2520D%2520abords.pdf": "3a4cea1e93a273560185619ef8603901",
"assets/assets/Les%2520histoires%2520d%2520a%2520chords.pdf": "4609de0afb66b7cabd96a4f40e88c74d",
"assets/assets/Les%2520larmes%2520des%2520mots.pdf": "1fba00bc03053f44616063fbc8e3ad50",
"assets/assets/Les%2520Portes%2520du%2520Penitencier.pdf": "931af0bb6ad8e81a81e3f28766374b83",
"assets/assets/Let%2520it%2520be.pdf": "5c9cf85f743fa295dc98e91d2ad7336e",
"assets/assets/Like%2520a%2520rolling%2520stone%25202.pdf": "fd84cbc4248566a16c335e016d1e51e4",
"assets/assets/Lipstick%2520polychrome.pdf": "ea1d533515f46583200b87761f0d92da",
"assets/assets/Lodi.pdf": "d9f564e3b834e1e527f2ce258f9662ab",
"assets/assets/Los%2520Angele%25CC%2580s%2520-%2520M%2520Head.pdf": "d6a627b2417d2e7cb5ff191bd3580fe9",
"assets/assets/Lover%2520please.pdf": "60343b9eebfba14abba92493f6cd6d42",
"assets/assets/Lover%2520why.pdf": "3ffeb4d18d92286568eba8002d45be27",
"assets/assets/L_%25C3%25A9tranger.pdf": "a0616fd9ceb0639ba137a4332a13fe7e",
"assets/assets/l_hymne%2520a%25CC%2580%2520l_amour.pdf": "f96bd44e8a333ad488f54c72f1e4e11e",
"assets/assets/Ma%2520Jolie%2520Sarah.pdf": "1a94f030823b3b47d6205099b679e1ae",
"assets/assets/Make%2520you%2520feel%2520my%2520love.pdf": "3074d83ac08e518034dc34e00d093918",
"assets/assets/mamy%2520blue.pdf": "6eb75f1a4847e3ef61571102e4885234",
"assets/assets/Manhattan-kaboul%2520chords.pdf": "effe45ebe5d76697a2885ec7fef6727c",
"assets/assets/Marcia%2520Baila.pdf": "aa4835e71de21fc67ed670a37b75c0c7",
"assets/assets/Me%2520and%2520Bobby%2520McGee%2520J.Joplin.pdf": "46dd9d20e412c96353612549d5ed7004",
"assets/assets/Messe%2520du%2520Bon%2520berger-complet.pdf": "f7718513fa4c5279edaf8ee667078b76",
"assets/assets/Midnight%2520Special.pdf": "b71f399324f95e3f5691c9fb624788b2",
"assets/assets/Miss%2520Robinson.pdf": "5659eaeee03ae942f780ebb088c83fa2",
"assets/assets/Mon%2520fils%2520ma%2520bataille%2520A.pdf": "cfb7cbdf71cb1f985f897d34a3281757",
"assets/assets/Mon%2520fils%2520ma%2520bataille.pdf": "1f7e0092278d57f8df1e213ecb7a450b",
"assets/assets/Money.pdf": "81d0d1462510999a3f1680e6e2cf9938",
"assets/assets/Monsoon%2520Tokio%2520Hotel.pdf": "c0c6a9049f2701b73081a4cea0836b39",
"assets/assets/Morgane%2520de%2520Toi.pdf": "3089b14cf33f1563587f7455b9fed8d4",
"assets/assets/My%2520Sweet%2520Lord.pdf": "53483c66f3009ffc4da296cb9137b175",
"assets/assets/New%2520years%2520day(1).pdf": "464b8dc56df0ebb75ed166d1dfeb3b9a",
"assets/assets/New%2520York%2520Avec%2520Toi.pdf": "c5d3e8f6ea8c1214b31fce5906f513c8",
"assets/assets/No%2520woman%2520no%2520cry%25201.pdf": "0336dd7344b8bb32c8e0579e95b774ea",
"assets/assets/No%2520Woman%2520no%2520Cry.pdf": "b1336fba714808a8e90d378dcaacb636",
"assets/assets/none%2520of%2520us%2520are%2520free%2520chords%2520(1).pdf": "491a246e59c8beb94213cb342c1c2eef",
"assets/assets/None%2520of%2520us%2520are%2520free.pdf": "dc429ce95e8eaab17c7dc03436a251e0",
"assets/assets/Nos%2520mains.pdf": "43550ac670b7060116d3e6cfdba41808",
"assets/assets/ode%2520to%2520Billy%2520joe.pdf": "0ebcfdd32774a5af2e826168096c7cdd",
"assets/assets/Oh%2520darling.pdf": "56e3b3feb8da8c796ba15a3f586ef9cd",
"assets/assets/On%2520Broadway.pdf": "5e0611885adff125190ea578b4ebd14b",
"assets/assets/One.pdf": "811946292adf92e368966591d14ae007",
"assets/assets/Oye%2520Como%2520Va.pdf": "a1b9d34cd28bf984e387a9e5a8ce59fa",
"assets/assets/Parles%2520moi.pdf": "3c696e0ed9ac107568065cc2d42e7918",
"assets/assets/Pendant%2520que%2520les%2520champs%2520brulent.pdf": "c7de7d23cfd4db78885ca9e3f3c2344e",
"assets/assets/Pre%25CC%2581parez%2520a%25CC%2580%2520travers%2520le%2520de%25CC%2581sert.pdf": "b85f10d3e53be45a56853a25f940a23a",
"assets/assets/Proud%2520Mary.pdf": "305b873d17edaff320535f78093282d0",
"assets/assets/Puisses%2520Tu.pdf": "72eb24b2f33a0173a683783cc848a126",
"assets/assets/Purple%2520rain%2520.pdf": "84dde4cd9b7fb4ea139d6aa66306533c",
"assets/assets/Put%2520your%2520lights%2520on%2520-%2520santana.pdf": "71fdee3a6d35e1d289c845c75ed21081",
"assets/assets/Que%2520ma%2520bouche%2520chante-ta-louange.pdf": "673e2926f1f241c22c203b6c5a898445",
"assets/assets/Qui%2520de%2520Nous%2520Deux.pdf": "b02bec6fc759293e732ecf0c4d8e3055",
"assets/assets/Retiens%2520la%2520Nuit.pdf": "5149bbf410e90d17a525cf78e2b3a4a1",
"assets/assets/Road%2520to%2520Hell(1).pdf": "fd871119ab5dbd4804e1cbc9af6cb9cc",
"assets/assets/Road%2520to%2520hell.pdf": "9d2426e5ed1fa7c5b7029ac307778ba1",
"assets/assets/Rock%25E2%2580%2599n%2520me%2520baby.pdf": "c20c22feaf762be6d88177ad7830b4c9",
"assets/assets/Rock_n%2520me%25201.pdf": "e373d72bb143c42f5c80d96f451433e1",
"assets/assets/Sailing.pdf": "6c3623501f4399f8c1212e51fea796e1",
"assets/assets/Santiano.pdf": "043ba5562c9073016d03ef820c1b0f2f",
"assets/assets/Schocking%2520blue%2520Dm.pdf": "a326d84067d24661ecd91b943af56dca",
"assets/assets/Sentimental%2520Journey.pdf": "822531f0e9bffbab0655d1f8d53f3c5a",
"assets/assets/Shoking%2520Blue%2520VENUS.pdf": "b7e517070264b1c580ee39c6489fa111",
"assets/assets/Shout.pdf": "8ae982f2618c6d11d1a9c331bf1e79d7",
"assets/assets/Show%2520me%2520the%2520way.pdf": "0dd20ba5ad11893649257e64626ff47f",
"assets/assets/si%2520tu%2520veux%2520m_essayer%2520A.pdf": "3c1d80e66fff16b91a12a1414ff7e8d5",
"assets/assets/si%2520tu%2520veux%2520m_essayer%2520C.pdf": "5e7cf360f2ae383ad802a8e1d2a5f4ae",
"assets/assets/Si%2520tu%2520veux%2520m_essayer.pdf": "e6355e024aa15c260c2dfc8d3cf8ee06",
"assets/assets/Sitting%2520in%2520the%2520Dock%2520of%2520the%2520Bay.pdf": "711d2271af0daf5489d7d9f24cf57cce",
"assets/assets/Sitting%2520on%2520the%2520dock%2520of%2520the%2520bay%2520chords%2520(1).pdf": "e67e69773f9f7abdc8dc3ba918fc0db2",
"assets/assets/Skin%25202-en%2520Em.pdf": "77598731590ee7e6fe6f286a69d6527d",
"assets/assets/Skin%2520deep.pdf": "40cd3370d189c8827fcb933300d61a3c",
"assets/assets/Smoke%2520on%2520the%2520Water.pdf": "8cae140ac7b042685737a72cdfe0966f",
"assets/assets/Soldier%2520of%2520fortune.pdf": "d9dc36660c5fc4fc1d1a667350a01f78",
"assets/assets/someone%2520like%2520you%2520en%2520C.pdf": "2a873b2196314a5f55c9604c90072e3f",
"assets/assets/Somewhere%2520Only%2520We%2520Know.pdf": "046acda2e2385f2d674d29294b0176ac",
"assets/assets/Son%2520of%2520a%2520preacher%2520man.pdf": "cae8d83dc3a0f5e4547742cef00f72e9",
"assets/assets/soulman%2520bass.pdf": "30d5885309d16dc6a16495555ba8100d",
"assets/assets/soulman%2520chords%2520(1).pdf": "b1ed9c413ef9a3c1ca66cfea81813772",
"assets/assets/Sous%2520aucun%2520pretexte.%2520F.%2520Hardy.pdf": "1a0b8647347074ae4f120e082f6a3031",
"assets/assets/Spirit%2520in%2520the%2520sky%2520-%2520BDao.pdf": "96f368053dcf60c92c7674a3bfe345e0",
"assets/assets/Stand%2520by%2520me%2520bb%2520King.pdf": "382b3bc745ba20dcc2201010e6aff36b",
"assets/assets/Stand%2520by%2520me%2520BEKing.pdf": "7002c47203cbf90b999fc5ee67220ea2",
"assets/assets/Stand%2520by%2520me%2520oasis.pdf": "b95f69e8841751588af2c51254fb24d2",
"assets/assets/STILL%2520LOVING%2520YOU%2520%2520%2520%2520%2520SCORPIONS.pdf": "6c84b7a8f12d81daadcf70b4bbafe5db",
"assets/assets/still%2520loving%2520you.pdf": "6c68ff49d490bbf60448760301f51035",
"assets/assets/Stillness%2520of%2520heart.pdf": "d3314015aa081ab1a03d97fab69e3fd6",
"assets/assets/Stop%2520S%2520Brown2.pdf": "b76807b0697b3a029873a6c1b0b4e05c",
"assets/assets/Sunny%2520Afternoon.pdf": "52ba12a029627b64ca84c952ba5a6a4f",
"assets/assets/Sunny%2520chords%2520(1).pdf": "7ef9f9d7ad1b070f157a164aafa2cdfb",
"assets/assets/Sunny.pdf": "50e79cc3f226541a30202a66568e3e7d",
"assets/assets/Sur%2520la%2520Route%2520de%2520Memphis(1).pdf": "b2bdcbdc82069f28dd29a5bac6917148",
"assets/assets/Sur%2520la%2520route%2520de%2520Memphis.pdf": "8a705ce49171dd4051a641d99c6b328a",
"assets/assets/Sur%2520la%2520route.pdf": "2a99e47107d392ae8fb3821db4c585c8",
"assets/assets/Suzie%2520Q.pdf": "efcd81396ac688db5e71a93c9c159cda",
"assets/assets/Sway.pdf": "e720d133b679f1389223597dcf603a4b",
"assets/assets/Sweet%2520Home%2520Alabama.pdf": "010762121a4ba3c44ea045fac0b1521b",
"assets/assets/Sweet%2520home%2520chicago.pdf": "a4b06f2d56c2675fadb41dcd8057e4c2",
"assets/assets/take-me-home-country-roads.pdf": "fae9ec246e78e393e3728db6a510af69",
"assets/assets/tears%2520in%2520heaven.pdf": "b050bb7ed05a68ece1c922414f89c546",
"assets/assets/Temps%2520a%2520nouveau.pdf": "9f93d200e7b37c291bd716be7abba9c5",
"assets/assets/Thanks%2520for%2520Coming.pdf": "6bcf955cd22c64bd8ea08325f4a7cbfb",
"assets/assets/The%2520beat%2520goes%2520on.pdf": "5c2ca9448788f53850ac62916cf44b1c",
"assets/assets/The%2520man%2520who%2520sold%2520the%2520world%25202.pdf": "24ef96a2a17c0f8fac84a20d279054db",
"assets/assets/The%2520scientist.pdf": "2ef03468c682770c3e29f89bcb264276",
"assets/assets/The%2520sound%2520of%2520silence.pdf": "275302d992f4e1622629c80a44715360",
"assets/assets/These%2520Boots%2520are%2520Made%2520for%2520Walking.pdf": "fc9a5533feba5fa9ce7d14eda5d853cb",
"assets/assets/Ticket%2520to%2520ride.pdf": "e0d445a819db7dbaf6aef3d31a74f7db",
"assets/assets/Tiens%2520ma%2520lampe%2520allumee.pdf": "b44b5ba2fa8cc3aab52ca9ecb098bcce",
"assets/assets/Time.pdf": "0823543f7a94c3def4714f9667585faa",
"assets/assets/To%2520be%2520with%2520you.pdf": "dac94f76c55fba93cbd9f5246fdc743a",
"assets/assets/Toi%2520et%2520Moi.pdf": "a2ea83782f0be7e3ad04b452e560f9cd",
"assets/assets/Toi%2520mon%2520amour.pdf": "8a0bfc53af577fca2e35b00d1f726365",
"assets/assets/Trouble%2520-%2520Oasis.pdf": "fc305ed8ae0ad55fef783e29051b1f46",
"assets/assets/Twist%2520and%2520Shout.pdf": "28317b532d4776d355614362f8d1f914",
"assets/assets/Un%2520autre%2520monde.pdf": "9a1c4344415a4c8d4a31bde19fa808e9",
"assets/assets/Unchain%2520my%2520Heart.pdf": "51f8236aebe8572d9d189c986f3302ea",
"assets/assets/Une%2520seule%2520vie%2520chords.pdf": "7fdf010bd150340df9ee3c940860bd5b",
"assets/assets/Urgent%2520-%2520Foreigner.pdf": "5db17460d0d611425195ae73613899b7",
"assets/assets/Uturn%2520Lili_.pdf": "831fd1b82524a190dc073a58394c9410",
"assets/assets/Volare.pdf": "857b9c1783d3e94f0952c4d5a9f1fb53",
"assets/assets/Voyage%2520en%2520Italie%2520G.pdf": "d96ee9871e6f221453b0bd38da59670e",
"assets/assets/Voyage%2520en%2520Italie.pdf": "163245504f02c869cd9b73fdbfdd742a",
"assets/assets/We%2520are%2520the%2520world%2520en%2520E.pdf": "5e1de662c29b1c52927842b26e30f8ab",
"assets/assets/We%2520are%2520the%2520World(1).pdf": "d51b01f756d04b6d3b2469700dbcb838",
"assets/assets/We%2520are%2520the%2520world.pdf": "d420dc972d19c11d6cd5386bde6bde41",
"assets/assets/What%2520s%2520Up.pdf": "877e3dcd48c0cae4e513269367c0666b",
"assets/assets/Whats%2520up%2520chords%2520(1).pdf": "a865f9aa1deeaf7cdecc4a36a4f75180",
"assets/assets/When%2520youre%2520gone.pdf": "f4b79eb9ac8307212bb189fab901d716",
"assets/assets/WHILE%2520MY%2520GUITAR%2520GENTLY%2520WEEPS.pdf": "5916607af75f29de55a99ef8e19a54e4",
"assets/assets/Wholl%2520stop%2520the%2520rain.pdf": "f3cfc0ea710ff4f66415a799e5067a75",
"assets/assets/Why%2520don%2520t%2520we%2520just%2520dance%2520-%2520josh%2520turner0029.pdf": "914bfd28fd07d22e763cfd93da9f90c3",
"assets/assets/Wild%2520horses.pdf": "bc3673e467e69eff620c2adea38a406e",
"assets/assets/Wild%2520World.pdf": "2b7302d92dd3be75d52f918e7921cf4a",
"assets/assets/Wind%2520of%2520change%2520bd.pdf": "3de900597e82af21627aa838298255fb",
"assets/assets/Wind%2520of%2520change.pdf": "73d31020037b5ac9778b51218a643e22",
"assets/assets/Wish%2520You%2520Were%2520Here.pdf": "f59bc75b01f3b239cf9ed1a8449c0bf3",
"assets/assets/With%2520a%2520little%2520help%2520from%2520my%2520friends0015.pdf": "830058429266e156e4258ff6b691bb50",
"assets/assets/With%2520or%2520without%2520you-U2.pdf": "9288a751cb01f5b67171757d8ee824b4",
"assets/assets/Without%2520you%2520-%2520H%2520Nilsson.pdf": "12a23d8367ab688daeb011eddb8be8f7",
"assets/assets/Yesterday%2520chords.pdf": "5d16ad5a22861c8a652caa444b4aad9d",
"assets/assets/You%2520and%2520I.pdf": "561e3c36f884366b3be027adabc55b04",
"assets/assets/You%2520don%2520t%2520know%2520my%2520Mind.pdf": "591dd951558559095adbfa7151fdae6f",
"assets/assets/you%2520must%2520be%2520evil%2520-%2520C%2520Re%25CC%2581a.pdf": "b55a0546364ded77dca0ed257f176289",
"assets/assets/youre%2520so%2520vain%2520chords%2520(1).pdf": "3048d6f2198108a42fb674b5fe2fda6c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bcfadbe7c1a6c4339f970adef183c782",
"assets/NOTICES": "083eb4f188ec4793b1774529f5b4391d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "bf3f17b9c24c078e92a433a5abc4fdd8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1d4456748fa1a442c3e5b133c1ba168a",
"/": "1d4456748fa1a442c3e5b133c1ba168a",
"main.dart.js": "5119854b383385138badc942bd7686dd",
"manifest.json": "ba7db5d33e7937a9cd444070ae321dcb",
"version.json": "0c9ccb129fea590e70a95e5e0840f948"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
