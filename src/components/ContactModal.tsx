import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, Mail, User, Building, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    persona: 'Team Strategist',
    inquiryType: 'Tableau Telemetry Export',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      persona: 'Team Strategist',
      inquiryType: 'Tableau Telemetry Export',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#151921] border border-[#262C38] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#0B0E14] text-[#94A3B8] hover:text-white hover:bg-[#262C38] transition-colors"
          aria-label="Close Contact Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white font-['Titillium_Web'] uppercase">
              Telemetry Request Dispatched
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-sm mx-auto font-sans">
              Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding <strong className="text-white">{formData.inquiryType}</strong> has been logged for evaluation.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-[#E10600] hover:bg-[#FF1801] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Return to Intelligence Dashboard
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B0E14] border border-[#262C38] text-[10px] font-mono text-[#E10600] uppercase tracking-wider mb-2">
                <Shield className="w-3 h-3" />
                <span>Race Intelligence Inquiry</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-['Titillium_Web'] uppercase">
                Connect With Analytics Team
              </h3>
              <p className="text-xs text-[#94A3B8] mt-1 font-sans">
                Direct channel for team strategists, broadcast journalists, and academic researchers.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-mono text-[#94A3B8] mb-1 uppercase">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Christian Horner"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0B0E14] border border-[#262C38] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#E10600] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#94A3B8] mb-1 uppercase">Work Email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="analyst@f1-team.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0B0E14] border border-[#262C38] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#E10600] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] mb-1 uppercase">Persona</label>
                  <select
                    value={formData.persona}
                    onChange={(e) => setFormData({ ...formData, persona: e.target.value })}
                    className="w-full bg-[#0B0E14] border border-[#262C38] rounded-lg px-3 py-2 text-xs text-white focus:border-[#E10600] focus:outline-none"
                  >
                    <option value="Team Strategist">Team Strategist</option>
                    <option value="Broadcast Journalist">Broadcast Journalist</option>
                    <option value="FIA Compliance">FIA Compliance Analyst</option>
                    <option value="Academic Researcher">Academic / Student</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] mb-1 uppercase">Inquiry Type</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-[#0B0E14] border border-[#262C38] rounded-lg px-3 py-2 text-xs text-white focus:border-[#E10600] focus:outline-none"
                  >
                    <option value="Tableau Telemetry Export">Tableau Data Export</option>
                    <option value="Custom Regulation Analysis">Regulation Analysis</option>
                    <option value="Live Telemetry Integration">Live API Integration</option>
                    <option value="Project Feedback">Project Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#94A3B8] mb-1 uppercase">Message / Telemetry Specs</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detail your race strategy, regulation query, or Tableau workbook requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0B0E14] border border-[#262C38] rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:border-[#E10600] focus:outline-none resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#E10600] hover:bg-[#FF1801] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-lg shadow-lg shadow-red-950/50 hover:shadow-red-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit Inquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
