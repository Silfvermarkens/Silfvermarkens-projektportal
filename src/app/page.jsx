
"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  return (
    <main className="p-4 md:p-8 grid gap-4">
      <h1 className="text-2xl font-bold">Silfvermarkens Projektportal</h1>

      <Tabs defaultValue="projekt1" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="projekt1">Projekt: Larssons Badrum</TabsTrigger>
          <TabsTrigger value="projekt2">Projekt: Köksrenovering</TabsTrigger>
        </TabsList>

        <TabsContent value="projekt1">
          <Card>
            <CardContent className="p-4 grid gap-4">
              <h2 className="text-xl font-semibold">Larssons Badrum</h2>

              <section>
                <label className="block font-medium mb-1">Tidsrapportering</label>
                <div className="flex items-center gap-2">
                  <Button variant="outline">Start</Button>
                  <Button variant="outline">Stop</Button>
                </div>
              </section>

              <section>
                <label className="block font-medium mb-1">Ladda upp bilder</label>
                <Input type="file" multiple />
              </section>

              <section>
                <label className="block font-medium mb-1">Material / UE</label>
                <Textarea placeholder="Ex: Kakelsäck, tätskikt, VVS från Rörbolaget..." />
              </section>

              <section>
                <label className="block font-medium mb-1">Anteckningar</label>
                <Textarea placeholder="Status, vad gjordes idag, kommande steg..." />
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projekt2">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">Köksrenovering</h2>
              <p className="text-muted-foreground">Innehåll på väg...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
