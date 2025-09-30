'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Zap,
  Shield,
  Code,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enterprise inquiry submitted:', formData);
    router.push('/temp');
  };

  const handleScheduleDemo = () => {
    router.push('/temp');
  };

  const handleStartChat = () => {
    router.push('/temp');
  };
  // ACTION_PLACEHOLDER_END

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Enterprise Sales',
      description: 'Discuss custom solutions',
      contact: 'enterprise@acmetechsolutions.com',
      action: 'Send Inquiry',
    },
    {
      icon: Phone,
      title: 'Technical Support',
      description: '24/7 expert assistance',
      contact: '+1 (555) 847-2639',
      action: 'Call Support',
    },
    {
      icon: MessageSquare,
      title: 'Live Technical Chat',
      description: 'Instant developer support',
      contact: 'Average response: 2 minutes',
      action: 'Start Chat',
    },
  ];

  const offices = [
    {
      city: 'Silicon Valley HQ',
      address: '2847 Innovation Drive, Palo Alto, CA',
      timezone: 'PST (UTC-8)',
    },
    {
      city: 'Austin Tech Hub',
      address: '1205 Enterprise Boulevard, Austin, TX',
      timezone: 'CST (UTC-6)',
    },
    {
      city: 'London R&D Center',
      address: '42 Fintech Square, Canary Wharf, London',
      timezone: 'GMT (UTC+0)',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Code className="size-3 mr-2" />
            Enterprise Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Scale Your Infrastructure
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              With Expert Guidance
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to transform your tech stack? Our solution architects are standing by to design a
            custom implementation that scales with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Zap className="size-6 text-primary" />
                Request Enterprise Demo
              </CardTitle>
              <CardDescription>
                Get a personalized walkthrough of our platform with custom use cases for your
                industry.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitForm} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Technical Lead Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Chen"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah.chen@techcorp.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company & Team Size *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="TechCorp Inc. (50-200 developers)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Technical Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Describe your current infrastructure challenges, expected traffic volume, compliance requirements, and integration needs..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button type="submit" className="flex-1 text-base py-6 group">
                    Request Custom Demo
                    <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleScheduleDemo}
                    className="flex-1 text-base py-6"
                  >
                    Schedule Architecture Review
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Direct Technical Access
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                      onClick={index === 2 ? handleStartChat : undefined}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Global Engineering Centers
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {office.timezone}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Support Availability
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Enterprise Support</span>
                    <span>24/7/365</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Solution Architects</span>
                    <span>Mon-Fri 6AM-8PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Hotline</span>
                    <span>Always Available</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Shield className="size-4" />
                    99.99% SLA with dedicated DevOps team
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
