# Ricash Developer Portal

Portail développeur complet pour l'API Ricash avec documentation, références API, guides et support multilingue (Français/Anglais).

## 🚀 Fonctionnalités

- **Documentation complète** : Guides détaillés pour toutes les APIs
- **Référence API** : Documentation complète de tous les endpoints
- **Guides pratiques** : Tutoriels step-by-step
- **Multilingue** : Support Français (par défaut) et Anglais
- **Design moderne** : Interface utilisateur responsive et professionnelle
- **Recherche** : Système de recherche dans la documentation (à venir)

## 📋 Prérequis

- Node.js 18+ 
- pnpm (recommandé) ou npm/yarn

## 🛠️ Installation

```bash
# Cloner le dépôt
git clone https://github.com/amasbarry223/Ricash-Dev.git
cd Ricash-Dev

# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm run dev
```

Le projet sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
ricash-developer-portal/
├── app/
│   ├── [locale]/          # Pages avec support multilingue
│   │   ├── docs/          # Documentation
│   │   ├── api-reference/ # Référence API
│   │   ├── guides/        # Guides pratiques
│   │   └── ...
│   └── layout.tsx         # Layout racine
├── components/            # Composants React réutilisables
├── i18n/                  # Configuration i18n
├── messages/              # Fichiers de traduction (fr.json, en.json)
└── public/                # Assets statiques
```

## 🌐 Routes Disponibles

### Documentation
- `/docs` - Guide de démarrage rapide
- `/docs/authentication` - Authentification
- `/docs/environments` - Environnements (Production/Sandbox)
- `/docs/wallet` - API Wallet
- `/docs/transfer` - API Transfer
- `/docs/payment` - API Payment
- `/docs/kyc` - API KYC
- `/docs/agents` - API Agent
- `/docs/webhooks` - Webhooks
- `/docs/errors` - Codes d'erreur
- `/docs/rate-limits` - Limites de taux
- `/docs/sdks` - SDKs et bibliothèques
- `/docs/changelog` - Changelog

### Référence API
- `/api-reference` - Vue d'ensemble
- `/api-reference/wallet/*` - Endpoints Wallet
- `/api-reference/transfer/*` - Endpoints Transfer
- `/api-reference/payment/*` - Endpoints Payment
- `/api-reference/kyc/*` - Endpoints KYC
- `/api-reference/agent/*` - Endpoints Agent

### Guides
- `/guides` - Liste des guides
- `/guides/quick-payment` - Intégrer les paiements en 5 minutes
- `/guides/webhooks` - Configuration des webhooks
- `/guides/sandbox-testing` - Tests avec Sandbox
- Et plus...

## 🎨 Technologies Utilisées

- **Next.js 16** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **next-intl** - Internationalisation
- **shadcn/ui** - Composants UI
- **Lucide React** - Icônes

## 📝 Scripts Disponibles

```bash
pnpm run dev      # Démarre le serveur de développement
pnpm run build    # Build de production
pnpm run start    # Démarre le serveur de production
pnpm run lint     # Vérification TypeScript
```

## 🌍 Support Multilingue

Le projet supporte deux langues :
- **Français (fr)** - Langue par défaut
- **Anglais (en)**

Les URLs sont automatiquement préfixées avec la locale :
- `http://localhost:3000/fr/docs` - Documentation en français
- `http://localhost:3000/en/docs` - Documentation en anglais

## 📊 Statistiques

- **36 pages** de documentation complètes
- **15 pages** API Reference détaillées
- **9 guides** pratiques
- **100% responsive** - Mobile, tablette, desktop
- **Accessibilité** - Conforme aux standards WCAG

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

Ce projet est privé et propriétaire de Ricash.

## 🔗 Liens Utiles

- **API Production** : https://api.ricash.com
- **API Sandbox** : https://sandbox-api.ricash.com
- **Documentation** : `/docs`
- **Support** : `/support`

---

**Développé avec ❤️ pour les développeurs Ricash**
