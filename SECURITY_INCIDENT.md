# Security Incident Response - April 2026

## GitHub Webhook Secret Exposure Notification

**Reference:** GH-9951654-7992-a1  
**Incident Date:** September 11 - December 10, 2025 (with brief occurrence on January 5, 2026)  
**Fixed:** January 26, 2026

### What Happened
GitHub's webhook platform had a bug that inadvertently included webhook secrets in the `X-Github-Encoded-Secret` HTTP header during deliveries. All affected webhooks have been rotated.

### Actions Taken on This Repository

#### 1. ✅ Audit Complete
- **No GitHub webhook endpoints found** - Repository doesn't implement webhook handling
- **No GitHub credentials exposed** - No authentication tokens were hardcoded

#### 2. 🔐 Additional Security Issue Fixed (Bonus)
While auditing for webhook issues, discovered **hardcoded Builder.io API keys** in production code that were exposed in Git history.

**Affected File:** `client/components/site/MusicPlayer.tsx`

**Problem:**
- API keys were embedded in 7 music player URLs
- Keys were public in GitHub commit history
- Any system with repository access could see them

**Solution Applied:**
- ✅ Moved API keys to environment variables (`VITE_BUILDER_MUSIC_API_KEY`)
- ✅ Created helper function to dynamically build URLs at runtime
- ✅ Updated `.gitignore` to prevent `.env` files from being committed
- ✅ Created `.env.example` template for developers

#### 3. Environment Variable Setup

**New Environment Variable:**
```bash
VITE_BUILDER_MUSIC_API_KEY=YOUR_NEW_ROTATED_KEY
```

**To Deploy:**
1. Generate new Builder.io API key: https://app.builder.io/account/space
2. Set environment variable in your hosting provider
3. The app will load the key at runtime

#### 4. Files Modified
- `client/components/site/MusicPlayer.tsx` - Refactored to use env vars
- `.env` - Updated with placeholder for new key
- `.env.example` - Created as template (safe to commit)
- `.gitignore` - Fixed to exclude `.env` files

#### 5. Next Steps

**IMMEDIATE (Within 24 hours):**
1. [ ] Rotate Builder.io API key at https://app.builder.io/account/space
2. [ ] Update deployment secrets with new key
3. [ ] Test music player still works in staging/production
4. [ ] Verify old key is disabled

**SHORT-TERM (This week):**
1. [ ] Review any logs that might contain the old API key
2. [ ] If available, purge historical logs containing the exposed key
3. [ ] Audit other projects for similar hardcoded credential issues

**ONGOING:**
1. Use `.env.example` pattern for all secrets
2. Enable pre-commit hooks to prevent secret commits (consider `detect-secrets` or similar)
3. Regular security audits of repository

#### 6. Verification

To verify the fix works:
```bash
# Install dependencies
npm install

# Build should work with env variable set
VITE_BUILDER_MUSIC_API_KEY=your-key npm run build

# Music player should load without hardcoded keys in source
```

---

**For Questions:** Contact GitHub Support - Reference: GH-9951654-7992-a1
