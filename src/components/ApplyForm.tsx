
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ApplyFormProps {
  jobId: string;
  jobTitle: string;
}

const ApplyForm = ({ jobId, jobTitle }: ApplyFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
    resume: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Application Submitted",
        description: "We've received your application. We'll be in touch soon!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        message: "",
        resume: null,
      });
    }, 1500);
  };

  return (
    <div className="glass p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-6">Apply for {jobTitle}</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-sig-dark">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sig-blue focus:ring-2 focus:ring-sig-blue/20 outline-none transition"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-sig-dark">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sig-blue focus:ring-2 focus:ring-sig-blue/20 outline-none transition"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-sig-dark">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sig-blue focus:ring-2 focus:ring-sig-blue/20 outline-none transition"
              placeholder="+1 (123) 456-7890"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="experience" className="block text-sm font-medium text-sig-dark">
              Years of Experience *
            </label>
            <select
              id="experience"
              name="experience"
              required
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sig-blue focus:ring-2 focus:ring-sig-blue/20 outline-none transition"
            >
              <option value="">Select experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-sig-dark">
            Why do you want to join SIG Solutions? *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sig-blue focus:ring-2 focus:ring-sig-blue/20 outline-none transition"
            placeholder="Tell us why you're interested in this position..."
          ></textarea>
        </div>

        <div className="space-y-2">
          <label htmlFor="resume" className="block text-sm font-medium text-sig-dark">
            Resume/CV *
          </label>
          <div className="border border-dashed border-gray-300 rounded-lg p-4">
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx"
              required
            />
            <label
              htmlFor="resume"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <span className="text-sig-blue mb-2">
                {formData.resume ? formData.resume.name : "Upload your resume (PDF, DOC, DOCX)"}
              </span>
              <span className="bg-sig-blue/10 text-sig-blue text-sm px-4 py-2 rounded-full hover:bg-sig-blue/20 transition">
                {formData.resume ? "Change File" : "Browse Files"}
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-sig-blue text-white px-6 py-4 rounded-xl font-medium text-lg hover:shadow-lg hover:shadow-sig-blue/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
