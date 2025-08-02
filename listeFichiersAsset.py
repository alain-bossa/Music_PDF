import os

def lister_fichiers_formates(chemin_du_repertoire):
    """
    Liste les noms de fichiers dans un répertoire donné,
    en entourant chaque nom de guillemets simples et en les séparant par une virgule.

    Args:
        chemin_du_repertoire (str): Le chemin du répertoire à explorer.

    Returns:
        str: Une chaîne de caractères contenant les noms de fichiers formatés,
             ou un message d'erreur si le répertoire n'existe pas.
    """
    if not os.path.isdir(chemin_du_repertoire):
        return f"Erreur : Le répertoire '{chemin_du_repertoire}' n'existe pas."

    noms_fichiers = []
    for element in os.listdir(chemin_du_repertoire):
        chemin_complet = os.path.join(chemin_du_repertoire, element)
        if os.path.isfile(chemin_complet):
            noms_fichiers.append(f"'{element}'") # Entoure le nom de fichier de guillemets simples

    return ", ".join(noms_fichiers)

# --- Utilisation du programme ---
if __name__ == "__main__":
    # Remplacez ce chemin par le chemin de votre répertoire
    repertoire_a_scanner = "C:\\Users\\fors\\Documents\\Applis\\App_DEV_Flutter\\pdf_music\\assets"
    # Exemple pour le répertoire courant :
    # repertoire_a_scanner = "."

    # Si vous utilisez Linux/macOS, vous pouvez essayer votre répertoire personnel :
    # repertoire_a_scanner = os.path.expanduser("~")

    # Si vous utilisez Windows, un chemin comme "C:\\Users\\VotreNomUtilisateur\\Documents"
    # ou un répertoire de test:
    # repertoire_a_scanner = "C:\\Temp\\MonDossierDeTest"

    # Créez quelques fichiers de test pour l'exemple (optionnel)
    # try:
    #     os.makedirs(repertoire_a_scanner, exist_ok=True)
    #     with open(os.path.join(repertoire_a_scanner, "fichier1.txt"), "w") as f: f.write("test")
    #     with open(os.path.join(repertoire_a_scanner, "image.jpg"), "w") as f: f.write("test")
    #     os.makedirs(os.path.join(repertoire_a_scanner, "sous_dossier"), exist_ok=True) # Ceci est un dossier, il ne sera pas listé
    # except Exception as e:
    #     print(f"Impossible de créer des fichiers de test : {e}")

    resultat = lister_fichiers_formates(repertoire_a_scanner)
    print(resultat)