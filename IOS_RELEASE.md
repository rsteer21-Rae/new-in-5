# New in 5 iOS release

The iOS app uses Capacitor with bundle ID `com.newinfive.app` and Apple Team ID
`375N4QJ87J`. GitHub Actions performs the macOS build and uploads the signed IPA
to TestFlight.

## GitHub Actions secrets

- `APPSTORE_CERTIFICATES_FILE_BASE64` — base64-encoded Apple Distribution `.p12`
- `APPSTORE_CERTIFICATES_PASSWORD` — password used when exporting the `.p12`
- `APPSTORE_API_PRIVATE_KEY` — contents of the App Store Connect API `.p8` key

## GitHub Actions variables

- `APPSTORE_API_KEY_ID`
- `APPSTORE_ISSUER_ID`

Never commit certificates, provisioning profiles, private keys, or their passwords.
After configuring the values, run **Build iOS and upload to TestFlight** manually
from the repository's Actions tab.
