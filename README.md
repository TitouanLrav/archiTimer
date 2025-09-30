# Archi Timer

Une application de gestion de minuteurs pour suivre les temps de réapparition des archimonstres.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- Node.js (version 18 ou supérieure)
- npm (généralement inclus avec Node.js)
- Git

## Installation

### Sur Ubuntu/Linux

1. **Installer Node.js et npm** (si ce n'est pas déjà fait)

```bash
# Mettre à jour les paquets
sudo apt update

# Installer Node.js et npm
sudo apt install nodejs npm

# Vérifier l'installation
node --version
npm --version
```

2. **Cloner le projet**

```bash
git clone <url-de-votre-repo>
cd archi-timer
```

3. **Installer les dépendances**

```bash
npm install
```

4. **Lancer le serveur de développement**

```bash
npm run dev
```

5. **Accéder à l'application**

Ouvrez votre navigateur et allez sur `http://localhost:5173`

---

### Sur Windows

1. **Installer Node.js et npm**

- Téléchargez l'installateur depuis [nodejs.org](https://nodejs.org/)
- Exécutez l'installateur et suivez les instructions
- Redémarrez votre terminal/invite de commande

Vérifiez l'installation en ouvrant PowerShell ou l'invite de commande :

```powershell
node --version
npm --version
```

2. **Installer Git** (si ce n'est pas déjà fait)

- Téléchargez Git depuis [git-scm.com](https://git-scm.com/)
- Installez-le avec les options par défaut

3. **Cloner le projet**

Ouvrez PowerShell ou l'invite de commande :

```powershell
git clone <url-de-votre-repo>
cd archi-timer
```

4. **Installer les dépendances**

```powershell
npm install
```

5. **Lancer le serveur de développement**

```powershell
npm run dev
```

6. **Accéder à l'application**

Ouvrez votre navigateur et allez sur `http://localhost:5173`

---

## Commandes disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## Technologies utilisées

- React 19
- TypeScript
- Vite
- Tailwind CSS

## Dépannage

### Le port 5173 est déjà utilisé

Si vous voyez une erreur indiquant que le port est déjà utilisé, Vite utilisera automatiquement le port suivant disponible (5174, 5175, etc.).

### Erreur lors de l'installation des dépendances

Essayez de supprimer le dossier `node_modules` et le fichier `package-lock.json`, puis réinstallez :

```bash
rm -rf node_modules package-lock.json  # Linux/Mac
npm install
```

```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json  # Windows PowerShell
npm install
```

### Les styles Tailwind ne s'affichent pas

Assurez-vous que le serveur de développement est bien redémarré après l'installation des dépendances.