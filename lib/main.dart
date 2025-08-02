import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:pdfx/pdfx.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';
import 'package:music_pdf/models/annotation_models.dart'; // <--- ASSUREZ-VOUS QUE LE CHEMIN EST CORRECT

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Lecteur PDF Annotable',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const PdfListScreen(),
    );
  }
}

class PdfListScreen extends StatefulWidget {
  const PdfListScreen({super.key});

  @override
  _PdfListScreenState createState() => _PdfListScreenState();
}

class _PdfListScreenState extends State<PdfListScreen> {
  final List<String> pdfFiles = [
    'a matter of trust- B Joel.pdf', 'A soldier of fortune.pdf', 'After Midnight.pdf', 'Aicha.pdf', 'Ain no sunchine.pdf', 'Aint no sunshine chords (1).pdf', 'All right now free.pdf', 'Angels.pdf', 'Angie rolling stones.pdf', 'Another Brick in the wall.pdf', 'Another Day in Paradise.pdf', 'Au Paradis.pdf', 'Ave Maria.pdf', 'Baby can i hold you.pdf', 'Baby that_s you.pdf', 'Baby What You Want Me To Do.pdf', 'Back to black.pdf', 'Beast of burden.pdf', 'Beds are burning.pdf', 'Before You Accuse Me.pdf', 'Big jet plane.pdf', 'Black Magic Woman.pdf', 'Brain damage P floyd.pdf', 'Brain Damage.pdf', 'Breathe - P Floyd.pdf', 'Breathe.pdf', 'Brick in the Wall.pdf', 'bring it home to me.pdf', 'Brown Sugar.pdf', 'Budapest.pdf', 'Bye Bye Love.pdf', 'California dreamin.pdf', 'California Girls.pdf', 'Californication.pdf', 'Can t get it out of my head.pdf', 'Cendrillon Telephone.pdf', 'Ces idees la.pdf', 'Cest comme ça chords.pdf', 'China girl.pdf', 'Comfortably Numb.pdf', 'Comme un avion sans aile.pdf', 'Couleur Menthe a l eau.pdf', 'Couleur menthe à leau chords.pdf', 'Crazy little thing called love[1].pdf', 'Crazy[1].pdf', 'Creep..pdf', 'Cry me a river.pdf', 'C_est écrit.pdf', 'Dirty Old Town(1).pdf', 'Dirty old town.pdf', 'divine  idylle chords (1).pdf', 'Don t answer me (re).pdf', 'Don t answer me.pdf', 'Don t bring me Down.pdf', 'Don t let me down.pdf', 'Don t Stop.pdf', 'Dont let me be misunderstood (Ve A. Brown).pdf', 'Dont let me down BDao.pdf', 'Dont let me down.pdf', 'Dont play that song.pdf', 'Dont You Forget About Me chords.pdf', 'dors Pagny.pdf', 'Dors.pdf', 'Dream a little dream of me.pdf', 'Drive my car.pdf', 'Dust in the Wind.pdf', 'EMMENEZ moi.pdf', 'Envole moi(1).pdf', 'envole moi.pdf', 'Esprit Grande Prairie.pdf', 'Eteints la Lumiere.pdf', 'Every breathe you take.pdf', 'Eye In The Sky(1).pdf', 'Eye in the sky.pdf', 'Éteiins la lumière chords.pdf', 'Feel Robbie Williams.pdf', 'Fever _ Peggy Lee.pdf', 'food for though.pdf', 'Forever young.pdf', 'Fortunate song.pdf', 'Get it on - PCo.pdf', 'Get it on Guitar.pdf', 'Get it on.pdf', 'Give me one reason.pdf', 'Go your own way- Fleetwood mac.pdf', 'good times - R coolidge.pdf', 'Got you on my mind.pdf', 'hallelujah en LA majeur.pdf', 'Hallelujah.pdf', 'Happy together - The turtles-2.pdf', 'Happy Together.pdf', 'Hard Days Night.pdf', 'Have You Ever Seen The Rain.pdf', 'Havent Met You Yet.pdf', 'Heading for a fall.pdf', 'Heart of gold.pdf', 'Hell is for children chords.pdf', 'Hello my lover.pdf', 'Here Comes The SUN.pdf', 'Heroes.pdf', 'Hey its ok.pdf', 'Hey Joe.pdf', 'Hey jude.pdf', 'Hit the road Jack.pdf', 'Honky Tonk Women.pdf', 'HOTEL CALIFORNIA.pdf', 'Hungry heart.pdf', 'I can see clearly now.pdf', 'I got you babe.pdf', 'I got you babe_.pdf', 'I Heard Through the Grapevine.pdf', 'I put a spell on you.pdf', 'I saw her standing there.pdf', 'I shall be released 2.pdf', 'i still have n_t found U2.pdf', 'i want to break free in C.pdf', 'I want to break free- Queen.pdf', 'I Want to Break Free.pdf', 'I want you back.pdf', 'Id rather go blind.pdf', 'Imagine.pdf', 'in My Place.pdf', 'In the air tonight.pdf', 'In the Name of Love.pdf', 'Instant Karma.pdf', 'Island in the sun - Weezer.pdf', 'Island in the Sun.pdf', 'Isnt she lovely(1).pdf', 'isnt she lovely.pdf', 'It hurts me too-E Clapton.pdf', 'It s So Easy.pdf', 'its all over now baby blue.pdf', 'Its allright- Etta James.pdf', 'Its only mystery.pdf', 'Its probably me- Sting.pdf', 'its so easy chords (2).pdf', 'I_ll stand by you en D.pdf', 'I_ll stand by you.pdf', 'I_m an african in Paris.pdf', 'Jack  L. Bertignac.pdf', 'Jack.pdf', 'Je me souviens de tout.pdf', 'Je m_en vais.pdf', 'Je te Pardonne.pdf', 'Jenny fran‡ais De Palmas.pdf', 'Jimmy Moriarty.pdf', 'Johnny and Mary.pdf', 'Jumping Jack Flash.pdf', 'Just like tom thumb_s blues- B Ferry.pdf', 'Just the two of us chords-1.pdf', 'Juste une Illusion.pdf', 'Killing me Softly.pdf', 'Kingston town .pdf', 'Knock on Heaven s Door.pdf', 'Knock on heaven_s doorBOB DYLAN.pdf', 'Knock on Wood.pdf', 'L Etranger.pdf', 'L indien.pdf', 'La ballade Nord Irlandaise C.pdf', 'La belle vie - S Distel.pdf', 'La dame de hte savoie.pdf', 'La derniere seance D.pdf', 'La Groupie Du Pianiste.pdf', 'La musique que jaime chords.pdf', 'La ou je t_emmererai.pdf', 'La seine.pdf', 'La vie en rose.pdf', 'Laila.pdf', 'Laissons Entrer le Soleil(1).pdf', 'laissons entrer le soleil.pdf', 'Laura ( en A).pdf', 'Laura.pdf', 'Le blues de toi F.pagny.pdf', 'Le jour s_est levé.pdf', 'Le pénitencier chords.pdf', 'Le sud chords.pdf', 'le sud in C.pd df', 'LE SUD Nino Ferrer.pdf', 'Les cactus.pdf', 'Les champs elysees.pdf', 'LEs COPAINS D abords.pdf', 'Les histoires d a chords.pdf', 'Les larmes des mots.pdf', 'Les Portes du Penitencier.pdf', 'Let it be.pdf', 'Like a rolling stone 2.pdf', 'Lipstick polychrome.pdf', 'Lodi.pdf', 'Los Angelès - M Head.pdf',  'Lover please.pdf', 'Lover why.pdf', 'l_hymne à l_amour.pdf', 'L_étranger.pdf', 'Ma Jolie Sarah.pdf',  'Make you feel my love.pdf', 'mamy blue.pdf', 'Manhattan-kaboul chords.pdf', 'Marcia Baila.pdf', 'Me and Bobby McGee J.Joplin.pdf', 'Messe du Bon berger-complet.pdf', 'Midnight Special.pdf', 'Miss Robinson.pdf', 'Mon fils ma bataille A.pdf', 'Mon fils ma bataille.pdf', 'Money.pdf', 'Monsoon Tokio Hotel.pdf', 'Morgane de Toi.pdf', 'My Sweet Lord.pdf', 'New years day(1).pdf', 'New York Avec Toi.pdf', 'No woman no cry 1.pdf', 'No Woman no Cry.pdf', 'none of us are free chords (1).pdf', 'None of us are free.pdf', 'Nos mains.pdf', 'ode to Billy joe.pdf', 'Oh darling.pdf', 'On Broadway.pdf', 'One.pdf', 'Oye Como Va.pdf', 'Parles moi.pdf', 'Pendant que les champs brulent.pdf', 'Préparez à travers le désert.pdf', 'Pr  roud Mary.pdf', 'Puisses Tu.pdf', 'Purple rain .pdf', 'Put your lights on - santana.pdf', 'Que ma bouche chante-ta-louange.pdf', 'Qui de Nous Deux.pdf', 'Retiens la Nuit.pdf', 'Road to Hell(1).pdf', 'Road to hell.pdf', 'Rock_n me 1.pdf', 'Rock’n me baby.pdf', 'Sailing.pdf', 'Santiano.pdf', 'Schocking blue Dm.pdf', 'Sentimental Journey.pdf', 'Shoking Blue VENUS.pdf', 'Shout.pdf', 'Show me the way.pdf', 'si tu veux m_essayer A.pdf', 'si tu veux m_essayer C.pdf', 'Si tu veux m_essayer.pdf', 'Sitting in the Dock of the Bay.pdf', 'Sitting on the dock of the bay chords (1).pdf', 'Skin 2-en Em.pdf', 'Skin deep.pdf', 'Smoke on the Water.pdf', 'Soldier of fortune.pdf', 'someone like you en C.pdf', 'Somewhere Only We Know.pdf', 'Son of a preacher man.pdf', 'soulman bass.pdf', 'soulman chords (1).pdf', 'Sous aucun pretexte. F. Hardy.pdf', 'Spirit in the sky - BDao.pdf', 'Stand by me bb King.pdf', 'Stand by me BEKing.pdf', 'Stand by me oasis.pdf', 'STILL LOVING YOU     SCORPIONS.pdf', 'still loving you.pdf', 'Stillness of heart.pdf', 'Stop S Brown2.pdf', 'Sunny Afternoon.pdf', 'Sunny chords (1).pdf', 'Sunny.pdf', 'Sur la Route de Memphis(1).pdf', 'Sur la route de Memphis.pdf', 'Sur la route.pdf', 'Suzie Q.pdf', 'Sway.pdf', 'Sweet Home Alabama.pdf', 'Sweet home chicago.pdf', 'take-me-home-country-roads.pdf', 'tears in heaven.pdf', 'Temps a nouveau.pdf', 'Thanks for Coming.pdf', 'The beat goes on.pdf', 'The man who sold the world 2.pdf', 'The scientist.pdf', 'The sound of silence.pdf', 'These Boots are Made for Walking.pdf', 'Ticket to ride.pdf', 'Tiens ma lampe allumee.pdf', 'Time.pdf', 'To be with you.pdf', 'Toi et Moi.pdf', 'Toi mon amour.pdf', 'Trouble - Oasis.pdf', 'Twist and Shout.pdf', 'Un autre monde.pdf', 'Unchain my Heart.pdf', 'Une seule vie chords.pdf', 'Urgent - Foreigner.pdf', 'Uturn Lili_.pdf', 'Volare.pdf', 'Voyage en Italie G.pdf', 'Voyage en Italie.pdf', 'We are the world en E.pdf', 'We are the World(1).pdf', 'We are the world.pdf', 'What s Up.pdf', 'Whats up chords (1).pdf', 'When youre gone.pdf', 'WHILE MY GUITAR GENTLY WEEPS.pdf', 'Wholl stop the rain.pdf', 'Why don t we just dance - josh turner0029.pdf', 'Wild horses.pdf', 'Wild World.pdf', 'Wind of change bd.pdf', 'Wind of change.pdf', 'Wish You Were Here.pdf', 'With a little help from my friends0015.pdf', 'With or without you-U2.pdf', 'Without you - H Nilsson.pdf', 'Yesterday chords.pdf', 'You and I.pdf', 'You don t know my Mind.pdf', 'you must be evil - C Réa.pdf', 'yyoure so vain chords (1).pdf'
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Mes Documents PDF'),
      ),
      body: ListView.builder(
        itemCount: pdfFiles.length,
        itemBuilder: (context, index) {
          final fileName = pdfFiles[index];
          return Card(
            margin: const EdgeInsets.all(8.0),
            child: ListTile(
              leading: const Icon(Icons.picture_as_pdf),
              title: Text(fileName),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => PdfViewerScreen(assetPath: 'assets/$fileName'),
                  ),
                );
              },
            ),
          );
        },
      ),
    );
  }
}

// --- AnnotationPainter (Aucun changement ici) ---
class AnnotationPainter extends CustomPainter {
  final Map<int, List<Annotation>> annotations;
  final int currentPage;
  final double scale;
  final Offset translation;

  AnnotationPainter({
    required this.annotations,
    required this.currentPage,
    required this.scale,
    required this.translation,
  });

  @override
  void paint(Canvas canvas, Size size) {
    final freehandPaint = Paint()
      ..color = Colors.red
      ..strokeCap = StrokeCap.round
      ..strokeWidth = 3.0
      ..style = PaintingStyle.stroke;

    final currentAnnotations = annotations[currentPage] ?? [];

    for (final annotation in currentAnnotations) {
      if (annotation.type == AnnotationType.freehand) {
        final freehand = annotation as FreehandAnnotation;
        if (freehand.points.isEmpty) continue;

        final Path path = Path();
        path.moveTo(
          freehand.points[0].dx * scale + translation.dx,
          freehand.points[0].dy * scale + translation.dy,
        );
        for (int i = 1; i < freehand.points.length; i++) {
          path.lineTo(
            freehand.points[i].dx * scale + translation.dx,
            freehand.points[i].dy * scale + translation.dy,
          );
        }
        canvas.drawPath(path, freehandPaint);
      } else if (annotation.type == AnnotationType.text) {
        final textAnnotation = annotation as TextAnnotation;
        final textPainter = TextPainter(
          text: TextSpan(
            text: textAnnotation.text,
            style: TextStyle(
              color: textAnnotation.textColor,
              fontSize: textAnnotation.fontSize * scale,
            ),
          ),
          textDirection: TextDirection.ltr,
        );
        textPainter.layout(minWidth: 0, maxWidth: size.width);

        // Dessine un petit point vert pour voir la position du texte (peut être retiré en prod)
        canvas.drawCircle(
          textAnnotation.position * scale + translation,
          5.0,
          Paint()..color = Colors.green..style = PaintingStyle.fill,
        );

        textPainter.paint(
          canvas,
          textAnnotation.position * scale + translation,
        );
      }
    }
  }

  @override
  bool shouldRepaint(covariant AnnotationPainter oldDelegate) {
    return oldDelegate.annotations != annotations ||
           oldDelegate.currentPage != currentPage ||
           oldDelegate.scale != scale ||
           oldDelegate.translation != translation;
  }
}

// --- PdfViewerScreen (MIS À JOUR) ---
class PdfViewerScreen extends StatefulWidget {
  final String assetPath;

  const PdfViewerScreen({Key? key, required this.assetPath}) : super(key: key);

  @override
  _PdfViewerScreenState createState() => _PdfViewerScreenState();
}

enum AnnotationMode { none, freehand, text }

class _PdfViewerScreenState extends State<PdfViewerScreen> {
  late PdfControllerPinch pdfController;
  final Map<int, List<Annotation>> _annotations = {}; 
  List<Offset> _currentFreehandPath = [];
  AnnotationMode _currentMode = AnnotationMode.none; // Commence en mode navigation
  int _currentPage = 0;
  final double _currentScale = 1.0;
  final Offset _currentTranslation = Offset.zero;

  late String _storageKey;

  @override
  void initState() {
    super.initState();
    _storageKey = 'annotations_${widget.assetPath.replaceAll('/', '_').replaceAll('.', '_')}';
    
    pdfController = PdfControllerPinch(
      document: PdfDocument.openAsset(widget.assetPath),
    );

    _loadAnnotations();
  }

  @override
  void dispose() {
    _saveAnnotations();
    pdfController.dispose();
    super.dispose();
  }

  // --- Méthodes de persistance ---

  Future<void> _loadAnnotations() async {
    final prefs = await SharedPreferences.getInstance();
    final String? annotationsJson = prefs.getString(_storageKey);

    if (annotationsJson != null) {
      final List<dynamic> decodedList = json.decode(annotationsJson);
      
      setState(() {
        _annotations.clear();
        for (final item in decodedList) {
          final Annotation annotation = Annotation.fromJson(item as Map<String, dynamic>);
          if (!_annotations.containsKey(annotation.pageIndex)) {
            _annotations[annotation.pageIndex] = [];
          }
          _annotations[annotation.pageIndex]!.add(annotation);
        }
        _annotations.forEach((key, value) {
          value.sort((a, b) => a.type.index.compareTo(b.type.index));
        });
      });
      print('Annotations chargées pour $_storageKey');
    }
  }

  Future<void> _saveAnnotations() async {
    final prefs = await SharedPreferences.getInstance();
    
    final List<Map<String, dynamic>> serializableList = [];
    _annotations.forEach((pageIndex, annotationsList) {
      for (final annotation in annotationsList) {
        serializableList.add(annotation.toJson());
      }
    });

    final String annotationsJson = json.encode(serializableList);
    await prefs.setString(_storageKey, annotationsJson);
    print('Annotations sauvegardées pour $_storageKey');
  }

  // --- Gestion des modes d'annotation ---

  void _setCurrentMode(AnnotationMode mode) {
    setState(() {
      _currentMode = mode;
      _currentFreehandPath = []; 
    });
    String message;
    switch (mode) {
      case AnnotationMode.none:
        message = 'Mode navigation activé';
        _saveAnnotations();
        break;
      case AnnotationMode.freehand:
        message = 'Mode dessin activé';
        break;
      case AnnotationMode.text:
        message = 'Mode texte activé';
        break;
    }
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(message)),
    );
  }

  // --- Gestion des gestes d'annotation ---

  // Ces méthodes ne sont appelées que si le GestureDetector est actif
  void _onPanStart(DragStartDetails details) {
    if (_currentMode == AnnotationMode.freehand) {
      setState(() {
        _currentFreehandPath = [details.localPosition];
        if (!_annotations.containsKey(_currentPage)) {
          _annotations[_currentPage] = [];
        }
        _annotations[_currentPage]!.add(
          FreehandAnnotation(
            points: _currentFreehandPath,
            pageIndex: _currentPage,
          ),
        );
      });
    } else if (_currentMode == AnnotationMode.text) {
      _showTextInputDialog(details.localPosition);
    }
  }

  void _onPanUpdate(DragUpdateDetails details) {
    if (_currentMode == AnnotationMode.freehand) {
      setState(() {
        _currentFreehandPath.add(details.localPosition);
      });
    }
  }

  void _onPanEnd(DragEndDetails details) {
    if (_currentMode == AnnotationMode.freehand) {
      _saveAnnotations();
    }
  }

  Future<void> _showTextInputDialog(Offset tapPosition) async {
    TextEditingController textController = TextEditingController();
    await showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Ajouter du texte'),
          content: TextField(
            controller: textController,
            autofocus: true,
            decoration: const InputDecoration(hintText: 'Entrez votre texte ici'),
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: const Text('Annuler'),
            ),
            ElevatedButton(
              onPressed: () {
                if (textController.text.isNotEmpty) {
                  setState(() {
                    if (!_annotations.containsKey(_currentPage)) {
                      _annotations[_currentPage] = [];
                    }
                    _annotations[_currentPage]!.add(
                      TextAnnotation(
                        text: textController.text,
                        position: tapPosition,
                        pageIndex: _currentPage,
                      ),
                    );
                  });
                  _saveAnnotations();
                }
                Navigator.pop(context);
              },
              child: const Text('Ajouter'),
            ),
          ],
        );
      },
    );
  }

  // --- NOUVEAUTÉ : Annuler la dernière annotation ---
  void _undoLastAnnotation() {
    setState(() {
      if (_annotations.containsKey(_currentPage) && _annotations[_currentPage]!.isNotEmpty) {
        _annotations[_currentPage]!.removeLast(); // Supprime la dernière annotation ajoutée
        _saveAnnotations(); // Sauvegarde l'état après l'annulation
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Dernière annotation annulée')),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Aucune annotation à annuler sur cette page')),
        );
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Lecture et Annotation PDF'),
        actions: [
          IconButton(
            icon: Icon(
              Icons.pan_tool_alt,
              color: _currentMode == AnnotationMode.none ? Colors.yellow : Colors.white,
            ),
            onPressed: () => _setCurrentMode(AnnotationMode.none),
            tooltip: 'Mode navigation',
          ),
          IconButton(
            icon: Icon(
              Icons.edit,
              color: _currentMode == AnnotationMode.freehand ? Colors.yellow : Colors.white,
            ),
            onPressed: () => _setCurrentMode(AnnotationMode.freehand),
            tooltip: 'Mode dessin',
          ),
          IconButton(
            icon: Icon(
              Icons.text_fields,
              color: _currentMode == AnnotationMode.text ? Colors.yellow : Colors.white,
            ),
            onPressed: () => _setCurrentMode(AnnotationMode.text),
            tooltip: 'Mode texte',
          ),
          IconButton(
            icon: const Icon(Icons.undo), // Bouton annuler
            onPressed: _undoLastAnnotation,
            tooltip: 'Annuler la dernière annotation',
          ),
          IconButton(
            icon: const Icon(Icons.clear_all),
            onPressed: () {
              setState(() {
                _annotations[_currentPage]?.clear();
                _currentFreehandPath = [];
              });
              _saveAnnotations();
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Annotations effacées pour cette page')),
              );
            },
            tooltip: 'Effacer toutes les annotations de la page',
          ),
          IconButton(
            icon: const Icon(Icons.save),
            onPressed: () {
              _saveAnnotations();
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Annotations sauvegardées manuellement')),
              );
            },
            tooltip: 'Sauvegarder les annotations',
          ),
        ],
      ),
      body: Stack(
        children: [
          PdfViewPinch(
            controller: pdfController,
            onDocumentLoaded: (document) {
              print('Document chargé : ${document.pagesCount} pages');
            },
            onPageChanged: (page) {
              setState(() {
                _currentPage = page - 1;
              });
              print('Page actuelle : $page');
            },
            // onScaleChanged: (scale) {
            //   setState(() {
            //     _currentScale = scale;
            //   });
            // },
          ),
          // Conditionner l'affichage du GestureDetector
          if (_currentMode != AnnotationMode.none) // Affiche le GestureDetector seulement si un mode d'édition est actif
            GestureDetector(
              onPanStart: _onPanStart,
              onPanUpdate: _onPanUpdate,
              onPanEnd: _onPanEnd,
              onTapDown: (_currentMode == AnnotationMode.text)
                  ? (TapDownDetails details) => _onPanStart(
                        DragStartDetails(localPosition: details.localPosition))
                  : null,
              child: CustomPaint(
                painter: AnnotationPainter(
                  annotations: _annotations,
                  currentPage: _currentPage,
                  scale: _currentScale,
                  translation: _currentTranslation,
                ),
                child: Container(),
              ),
            ),
        ],
      ),
    );
  }
}