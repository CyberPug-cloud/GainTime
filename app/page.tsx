import Image from "next/image"
import { Github, Mail, HelpCircle, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6FFFD] to-[#40CFC8] dark:from-[#134E4C] dark:to-[#0A2827]">
      <header className="bg-white/95 backdrop-blur-sm dark:bg-gray-950/95 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon.jpg-OW9Gvlp3XWGPRsC6Ewl2UFdsvZzZQX.jpeg"
                alt="GainTime Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#40CFC8] to-[#2980B9] bg-clip-text text-transparent">
                GainTime
              </h1>
              <p className="text-sm text-muted-foreground">Build better habits</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative w-24 h-24">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon.jpg-OW9Gvlp3XWGPRsC6Ewl2UFdsvZzZQX.jpeg"
                  alt="GainTime Logo"
                  width={96}
                  height={96}
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
              GainTime Support
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Build Habits, Gain Time - We're here to help you achieve more!
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 rounded-2xl shadow-xl p-6">
            <Tabs defaultValue="faq" className="mb-12">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="faq">FAQ</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="feature-requests">Feature Requests</TabsTrigger>
              </TabsList>

              <TabsContent value="faq" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I add a new habit?</AccordionTrigger>
                    <AccordionContent>
                      To add a new habit, tap the "Add" button on the main screen. Fill in the habit details including
                      title, description, priority, and frequency. You can also set goals for your habit.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can I change the language of the app?</AccordionTrigger>
                    <AccordionContent>
                      Yes! GainTime supports multiple languages including English, French, German, Polish, Spanish, and
                      Italian. You can change the language in the Settings menu under "Language".
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I track my progress?</AccordionTrigger>
                    <AccordionContent>
                      GainTime provides detailed statistics for each habit, including total completions, longest streak,
                      and successful days. You can view your progress in the Calendar and Progress sections of each
                      habit.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>How do I set up habit reminders?</AccordionTrigger>
                    <AccordionContent>
                      When creating or editing a habit, you can set up reminders by enabling the "Habit Reminder" option
                      and selecting a time. GainTime will send you notifications to help you remember to complete your
                      habits.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="contact">
                <div className="grid gap-6">
                  <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Email Support</CardTitle>
                      <CardDescription>Get in touch with our support team</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-[#40CFC8]" />
                        <span>support@gaintime-app.com</span>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground">
                        We typically respond within 24-48 hours on business days.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-[#40CFC8] hover:bg-[#3BB8B2]">
                        <Mail className="mr-2 h-4 w-4" /> Send Email
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="feature-requests">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-4">Feature Requests</h2>

                  <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Suggest New Features</CardTitle>
                      <CardDescription>Help us improve GainTime with your ideas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        We're always looking for ways to make GainTime better. If you have an idea for a new feature or
                        an improvement to an existing one, we'd love to hear it!
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-[#40CFC8]/10 rounded-full p-1">
                            <FileText className="h-4 w-4 text-[#40CFC8]" />
                          </div>
                          <div>
                            <h4 className="font-medium">Describe your idea</h4>
                            <p className="text-sm text-muted-foreground">
                              Provide a clear and detailed description of your feature request. Explain how it would
                              work and why it would be valuable.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-[#40CFC8]/10 rounded-full p-1">
                            <HelpCircle className="h-4 w-4 text-[#40CFC8]" />
                          </div>
                          <div>
                            <h4 className="font-medium">Check existing requests</h4>
                            <p className="text-sm text-muted-foreground">
                              Before submitting, please check if your idea has already been suggested. You can add your
                              thoughts to existing requests.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <Button className="w-full sm:w-auto bg-[#40CFC8] hover:bg-[#3BB8B2]">
                        <Github className="mr-2 h-4 w-4" /> Submit Feature Request
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto border-[#40CFC8] text-[#40CFC8] hover:bg-[#40CFC8] hover:text-white"
                      >
                        <Github className="mr-2 h-4 w-4" /> View Existing Requests
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="bg-white/95 backdrop-blur-sm dark:bg-gray-950/95 border-t border-gray-200 dark:border-gray-800 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon.jpg-OW9Gvlp3XWGPRsC6Ewl2UFdsvZzZQX.jpeg"
                alt="GainTime Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
            </div>
            <span className="font-semibold">GainTime</span>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GainTime. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

