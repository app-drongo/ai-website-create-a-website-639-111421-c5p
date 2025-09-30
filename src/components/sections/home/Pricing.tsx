'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Shield, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing() {
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState('monthly');

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/temp');
  };

  const handleProfessionalPlan = () => {
    router.push('/temp');
  };

  const handleEnterprisePlan = () => {
    router.push('/temp');
  };

  const handleScheduleDemo = () => {
    router.push('/temp');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Developer',
      description: 'Perfect for individual developers and small projects',
      price: billingCycle === 'monthly' ? '$0' : '$0',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      badge: null,
      features: [
        'Up to 5 API integrations',
        'Basic cloud infrastructure',
        'Community support',
        '10GB data storage',
        'Standard security protocols',
        'Basic monitoring dashboard',
      ],
      cta: 'Start Building',
      popular: false,
      handler: handleStarterPlan,
    },
    {
      name: 'Professional',
      description: 'Ideal for growing tech teams and scale-ups',
      price: billingCycle === 'monthly' ? '$89' : '$890',
      period: billingCycle === 'monthly' ? '/month' : '/year',
      badge: 'Most Popular',
      features: [
        'Unlimited API integrations',
        'Advanced cloud architecture',
        'Priority technical support',
        '500GB data storage',
        'Enterprise-grade security',
        'Real-time analytics dashboard',
        'Multi-environment deployment',
        'Advanced CI/CD pipelines',
        'Custom domain management',
      ],
      cta: 'Launch Professional',
      popular: true,
      handler: handleProfessionalPlan,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations requiring custom solutions',
      price: 'Custom',
      period: '',
      badge: 'White Glove',
      features: [
        'Everything in Professional',
        'Unlimited data storage',
        '24/7 dedicated support team',
        'Custom API development',
        'Advanced threat protection',
        '99.99% SLA guarantee',
        'Dedicated solution architect',
        'Custom training programs',
        'On-premise deployment options',
      ],
      cta: 'Contact Solutions Team',
      popular: false,
      handler: handleEnterprisePlan,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            <Rocket className="size-3 mr-2" />
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Scale Your Innovation
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Without Limits
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the perfect plan to accelerate your development. Enterprise-grade infrastructure
            with transparent pricing. Scale up or down as your needs evolve.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingCycle === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingCycle === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              Annual
              <Badge variant="secondary" className="ml-2 text-xs bg-primary/10 text-primary">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit border-primary/30 text-primary"
                  >
                    <Shield className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
                {billingCycle === 'annual' && plan.price !== 'Custom' && plan.price !== '$0' && (
                  <p className="text-sm text-primary mt-2">
                    Save ${(parseInt(plan.price.replace('$', '')) * 12 * 0.25).toFixed(0)} annually
                  </p>
                )}
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.handler}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Professional' && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day free trial • No setup fees • Cancel anytime
                  </p>
                )}

                {plan.name === 'Developer' && (
                  <p className="text-center text-sm text-muted-foreground">
                    Always free • No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6">
            We specialize in building tailored tech solutions for enterprises with unique
            requirements. Our solution architects will design the perfect infrastructure for your
            organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleScheduleDemo} variant="outline" size="lg">
              Schedule Architecture Review
            </Button>
            <Button onClick={handleScheduleDemo} size="lg">
              Talk to Solutions Team
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by 10,000+ developers and 500+ enterprises worldwide
            </p>
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="size-3" />
                SOC 2 Compliant
              </div>
              <div className="flex items-center gap-1">
                <Check className="size-3" />
                99.99% Uptime SLA
              </div>
              <div className="flex items-center gap-1">
                <Zap className="size-3" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
