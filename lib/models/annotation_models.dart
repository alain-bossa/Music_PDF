// lib/models/annotation_models.dart
import 'package:flutter/material.dart';

// Type d'annotation énuméré
enum AnnotationType { freehand, text }

// Classe abstraite pour une annotation
abstract class Annotation {
  final AnnotationType type;
  final int pageIndex; // La page sur laquelle l'annotation se trouve

  Annotation(this.type, this.pageIndex);

  // Méthode abstraite pour la sérialisation en JSON
  Map<String, dynamic> toJson();

  // Factory constructor abstrait pour la désérialisation
  factory Annotation.fromJson(Map<String, dynamic> json) {
    final type = AnnotationType.values.firstWhere(
      (e) => e.toString() == json['type'],
    );
    final pageIndex = json['pageIndex'] as int;

    switch (type) {
      case AnnotationType.freehand:
        return FreehandAnnotation.fromJson(json, pageIndex);
      case AnnotationType.text:
        return TextAnnotation.fromJson(json, pageIndex);
      default:
        throw Exception('Unknown annotation type: $type');
    }
  }
}

// Annotation de dessin à main levée
class FreehandAnnotation extends Annotation {
  final List<Offset> points; // Liste des points du tracé

  FreehandAnnotation({required this.points, required int pageIndex})
      : super(AnnotationType.freehand, pageIndex);

  @override
  Map<String, dynamic> toJson() => {
        'type': type.toString(),
        'pageIndex': pageIndex,
        'points': points.map((p) => [p.dx, p.dy]).toList(),
      };

  factory FreehandAnnotation.fromJson(Map<String, dynamic> json, int pageIndex) {
    final List<dynamic> rawPoints = json['points'] as List<dynamic>;
    final points = rawPoints
        .map((p) => Offset(p[0] as double, p[1] as double))
        .toList();
    return FreehandAnnotation(points: points, pageIndex: pageIndex);
  }
}

// Annotation textuelle
class TextAnnotation extends Annotation {
  final Offset position; // Position du coin supérieur gauche du texte
  final String text;      // Le texte de l'annotation
  final double fontSize;  // Taille de la police
  final Color textColor;  // Couleur du texte (pourrait être stocké sous forme d'ARGB int)

  TextAnnotation({
    required this.position,
    required this.text,
    this.fontSize = 16.0,
    this.textColor = Colors.blue, // Bleu par défaut pour le texte
    required int pageIndex,
  }) : super(AnnotationType.text, pageIndex);

  @override
  Map<String, dynamic> toJson() => {
        'type': type.toString(),
        'pageIndex': pageIndex,
        'position': [position.dx, position.dy],
        'text': text,
        'fontSize': fontSize,
        // ignore: deprecated_member_use
        'textColor': textColor.value, // Stocke la couleur sous forme d'entier ARGB
      };

  factory TextAnnotation.fromJson(Map<String, dynamic> json, int pageIndex) {
    final List<dynamic> rawPosition = json['position'] as List<dynamic>;
    final position = Offset(rawPosition[0] as double, rawPosition[1] as double);
    return TextAnnotation(
      position: position,
      text: json['text'] as String,
      fontSize: json['fontSize'] as double,
      textColor: Color(json['textColor'] as int),
      pageIndex: pageIndex,
    );
  }
}