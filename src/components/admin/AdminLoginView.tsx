import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Mail, Lock, AlertCircle, Eye, EyeOff, Sparkles, ArrowLeft } from 'lucide-react';
import { Language, t } from '../../translations';
import { apiAdminLogin } from '../../api';

interface AdminLoginViewProps {
  language: Language;
  onLoginSuccess: () => void;
  onBackToHome: () => void;
}

export default function AdminLoginView({ language, onLoginSuccess, onBackToHome }: AdminLoginViewProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const success = await apiAdminLogin(email, password);
      if (success) {
        onLoginSuccess();
      } else {
        setIsLoading(false);
        setError(t('login.error', language));
      }
    } catch (err) {
      setIsLoading(false);
      setError(t('login.error', language));
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 relative overflow-hidden bg-[#fbf9f8]">
      {/* Sacred glowing backdrop decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ffdbcc]/40 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#a04100]/5 rounded-full blur-[80px] pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-xl border border-[#e2bfb0]/30 rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#a04100]/5"
      >
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="absolute top-6 left-6 text-[#5a4136]/60 hover:text-[#a04100] transition-colors flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t('login.back', language)}
        </button>

        {/* Logo and Icon Header */}
        <div className="text-center mt-4 mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#ffdbcc]/50 text-[#a04100] mb-4 shadow-sm">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1b1c1c] tracking-wide">
            {t('login.title', language)}
          </h2>
          <p className="text-xs text-[#5a4136]/70 mt-2 font-medium tracking-wide">
            {t('login.subtitle', language)}
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-3.5 bg-red-50 border border-red-200/50 rounded-2xl flex items-start gap-2.5 text-red-600 text-xs"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </motion.div>
          )}

          {/* Email field */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#5a4136]/80 uppercase tracking-widest">
              {t('login.email', language)}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#5a4136]/40">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                required
                placeholder="admin@poojapandit.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full bg-white/50 border border-[#e2bfb0]/30 rounded-2xl pl-11 pr-4 py-3.5 text-[14px] text-[#1b1c1c] placeholder-[#5a4136]/30 focus:outline-none focus:border-[#a04100] focus:ring-1 focus:ring-[#a04100] disabled:opacity-50 transition-all"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-xs font-bold text-[#5a4136]/80 uppercase tracking-widest">
                {t('login.password', language)}
              </label>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#5a4136]/40">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                className="w-full bg-white/50 border border-[#e2bfb0]/30 rounded-2xl pl-11 pr-12 py-3.5 text-[14px] text-[#1b1c1c] placeholder-[#5a4136]/30 focus:outline-none focus:border-[#a04100] focus:ring-1 focus:ring-[#a04100] disabled:opacity-50 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#5a4136]/40 hover:text-[#a04100] transition-colors cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#a04100] hover:bg-[#a04100]/95 text-white font-semibold text-[14px] py-4 rounded-2xl shadow-lg shadow-[#a04100]/15 hover:shadow-xl hover:shadow-[#a04100]/20 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {t('login.loading', language)}
              </span>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                {t('login.submit', language)}
              </>
            )}
          </button>
        </form>

        {/* Demo login help info */}
        <div className="mt-8 pt-6 border-t border-[#e2bfb0]/20 text-center">
          <p className="text-[10px] text-[#5a4136]/60 leading-relaxed font-mono">
            Demo Details: admin@poojapandit.com / shastri108
          </p>
        </div>
      </motion.div>
    </div>
  );
}
