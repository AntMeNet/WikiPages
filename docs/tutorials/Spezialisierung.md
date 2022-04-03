---
title: Spezialisierung
sidebar_position: 5
---

In den bisherigen Lektionen hast du das Verhalten deiner Ameisen festgelegt. 
Jetzt lernst du, wie du die Fähigkeiten deiner Ameisen anpassen kannst. Anstatt "Fähigkeiten" kann man auch "Eigenschaften" sagen, oder wie in einem Rollenspiel "Attribute". 
Da beide Begriffe aber auch Sprachkonstrukte in den Programmiersprachen C# und Visual Basic bezeichnen, benutzen wir sie in AntMe! nicht, um nicht durcheinander zu kommen. Stattdessen sagen wir "Fähigkeiten". 

Eine Ameise hat folgende Fähigkeiten:

| Fähigkeit               | Beschreibung                                                                                                                                                                                                                                                                                                                                              |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Geschwindigkeit**     | Gibt an, wieviele Schritte eine Ameise pro Spielrunde zurücklegen kann. Zum Vergleich: eine Ameise ist vier Schritte lang.                                                                                                                                                                                                                                |
| **Drehgeschwindigkeit** | Gibt an, um wie viel Grad eine Ameise sich pro Runde drehen kann. Ein voller Kreis hat, wie du schon weißt, 360 Grad. Solange eine Ameise sich dreht, kann sie sich nicht bewegen.                                                                                                                                                                        |
| **Last**                | Gibt an, wieviele Nahrungseinheiten eine Ameise auf einmal tragen kann. Wenn eine Ameise beladen ist, sinkt ihr Angriffwert auf 0. Wenn eine Ameise voll beladen ist, sinkt ihre Geschwindigkeit um die Hälfte ab.                                                                                                                                        |
| **Sichtweite**          | Gibt an, wie weit eine Ameise sehen kann, in Schritten gemessen. Dabei ist es egal, ob sich das Objekt vor oder hinter einer Ameise befindet. Die AntMe!-Ameisen können auch nach hinten sehen! (In der Natur hingegen ist bei Ameisen die optische Wahrnehmung wenig ausgeprägt und wird daher wenig genutzt, aber das nur am Rande.                     |
| **Reichweite**          | Gibt an, wieviele Schritte eine Ameise zurücklegen kann, bevor sie stirbt. Wenn eine Ameise ein Drittel ihrer Reichweite zurückgelegt hat, wird sie müde. Die Müdigkeit hat aber keine Auswirkungen auf die anderen Fähigkeiten.                                                                                                                          |
| **Energie**             | Gibt an, wieviele Lebenspunkte eine Ameise noch hat. Kehrt die Ameise in einen Ameisenbau zurück, werden ihre Lebenspunkte wieder aufgeladen. Jetzt kann sie wieder die volle Reichweite an Schritten zurücklegen. Je mehr Lebenspunkte eine Ameise hat, umso länger kann sie kämpfen, also ihrem Feind Schaden zufügen.                                  |
| **Angriff**             | Gibt an, wie viele Lebenspunkte einem Gegner in einem Kampf mit der Ameise jede Runde abgezogen werden. Je höher der Angriffswert, desto schneller ist ein Kampf zu Ende. Wenn eine Ameise Last trägt, sinkt der Angriffswert auf 0 ab. Eine Ameise kann also nicht gleichzeitig kämpfen und eine Last tragen, egal ob es ein Stück Zucker oder Obst ist. |

Genau wie in einem Rollenspiel, bei dem dein Held stärker und schneller wird, kannst du Punkte auf diese Fähigkeiten vergeben. Dabei musst du bestimmte Gesetzmäßigkeit beachten, da du nicht unendlich viele Punkte zur Verfügung hast. 

Um eine Ameisen-Fähigkeit zu verschlechtern, ziehst du ihr einen oder mehr Punkte ab. 
Um eine Fähigkeit zu verbessern, gibst du ihr einen oder zwei Punkte hinzu. 
Damit eine Fähigkeit gesteigert werden kann, muss also eine andere verschlechtert werden. Um eine Fähigkeit auf zwei Punkte zu steigern, müsstest du zwei andere Fähigkeiten verschlechtern. Die Summe aller Punkte darf maximal 0 sein. Eine Summe kleiner als 0 ist 
auch möglich, aber dann nimmst du Punktverlust hin, ohne im Gegenzug Fähigkeiten verbessert zu haben.

Suche im Quelltext den folgenden Block. Dieser Block definiert in den .NET Programmiersprachen ein sogenanntes „Attribut“, deshalb sprechen wir bei einer Ameise von Fähigkeiten.

```cs
[Kaste(
    Name = "Standard",
    GeschwindigkeitsModifikator = 0,
    DrehgeschwindigkeitModifikator = 0,
    LastModifikator = 0,
    SichtweiteModifikator = 0,
    ReichweiteModifikator = 0,
    EnergieModifikator = 0,
    AngriffModifikator = 0,
)]
```

Benenne die Kaste von „Standard“ entsprechend der gewünschten Fähigkeiten um, z.B. in „Sammler“ oder „Kämpfer“. 
Vergib nun Punkte auf die Fähigkeiten entsprechend der Gesetzmässigkeit der Punktvergabe. Du kannst -1, 0 , 1 oder 2 Punkte vergeben.

![](/img/tutorials/spezialisierung/Lektion7_2.png)

Suche die folgende Methode:

```cs
public override void string BestimmeKaste(Dictionary<string,int> anzahl)
{
    return "Standard";
}
```

Du findest diese Methode unweit der „Kaste“, die du soeben umbenannt hast.

![](/img/tutorials/spezialisierung/Lektion7_4.png)

Trage zwischen die Anführungszeichen bei „return“ den Namen ein, den du zuvor vergeben hast (also „Sammler“ oder „Kämpfer“). 

:::caution Achtung!
Das ist sehr wichtig, denn sonst werden alle (!) deine Ameisen im Spiel die Standard-Kaste haben.
:::

Starte nun das Spiel. Wenn du Punkte auf die Geschwindigkeit vergeben hast, kannst du sehen, dass deine Ameisen sich jetzt schneller bewegen. 
Wenn du andere Fähigkeiten verändert hast, dann dauert es wahrscheinlich ein wenig, bis die Auswirkungen deiner Änderungen sichtbar sind.

Wenn du ein bisschen genauer nachdenkst, wirst du sicher darauf kommen, dass die Methode „BestimmeKaste“ viel zu kompliziert aussieht, dafür dass wir bisher immer nur denselben Wert zurückgeben. 
Du kannst in der Methode eine beliebige Kaste zurückgeben, solange du ihn vorher definierst. 
Dein Ameisenvolk kann nämlich beliebig viele verschiedene Kasten haben. Wenn du den Namen einer Kaste zurückgibst, der nicht existiert, dann hat die neue Ameise die Standard-Kaste. 


Suche erneut den Block mit den Fähigkeiten und dupliziere ihn (am einfachsten geht das mit Markieren, Kopieren <kbd>Strg</kbd> + <kbd>C</kbd> und Einfügen <kbd>Strg</kbd>+ <kbd>V</kbd>).
Gib der zweiten Kaste einen anderen Namen. Warum muss der Name verschieden sein? Wenn mehrere Kasten denselben Namen haben, wird immer nur die zuletzt definierte Kaste benutzt werden.

Trage in die Methode „BestimmeKaste“ den folgenden Quelltext ein (anstatt der bereits bestehenden Zeile). Nehmen wir an, die beiden definierten Klassen heißen „Sammler“ und „Kämpfer“. Ändere den Quelltext nun so ab, dass er mit deinen Kasten übereinstimmt.

```cs
if(anzahl["Sammler"] < 75)
{
    return "Sammler";
}
else
{
    return "Kämpfer";
}
```

Neue Ameisen werden jetzt so lange als „Sammler“-Ameisen geboren, bis mindestens 75 „Sammler“ vorhanden sind. 
Danach werden alle neu geborenen Ameisen zu Kämpfern. Da ein Spieler in einem Spiel maximal 100 Ameisen gleichzeitig haben kann, haben wir 75 „Sammler“ und 25 „Kämpfer“. 
Das ergibt das ein Verhältnis zwischen „Sammlern“ und „Kämpfern“ von 3:1. 
Wenn du ein Spiel mit mehr Ameisen pro Spieler spielst oder wenn abwechselnd Sammler und Kämpfer geboren werden sollen, musst du das Mengenverhältnis etwas anders gestalten. Aber das bekommst du bestimmt schon alleine hin.

Wenn deine Ameisenkasten sich unterschiedlich verhalten sollen, dann musst du ihre Kaste auslesen und ihnen abhängig davon Befehle geben. Schauen wir uns ein Beispiel an.

Suche die Methode „WirdAngegriffen“ für Wanzen und ändere ihr Inneres wie folgt ab:

```cs
if(Kaste == "Sammler")
{
    LasseNahrungFallen();
    GeheWegVon(wanze);
}
else if(Kaste == "Kämpfer")
{
    if(AnzahlAmeisenInSichtweite * MaximaleEnergie > wanze.AktuelleEnergie)
    {
        GreifeAn(wanze);
    }
}
```

Vielleicht fragst du dich, warum hier zwei `if`-Abfragen gemacht werden. 
Wenn die Ameise kein „Sammler“ ist, dann muss sie ja ein „Kämpfer“ sein. 
Auch wenn du zwei Kasten definiert hast, kann die Ameise immer noch zur „Standard“-Kaste mit leerem Namen und ohne modifizierte Fähigkeiten gehören. 
Das passiert dann, wenn du in `BestimmeKaste` eine Kaste zurückgegeben hast, die du zuvor nicht definiert hast, z.B wenn man sich im Namen vertippt hat. 
Und deswegen, nur zur Sicherheit, wird auch die zweite `if`-Abfrage gemacht.

Werte der Fähigkeiten:

| **Modifikator**         | **-1**                 | **0 (Standard)**                | **1**                   | **2**                   |
|-------------------------|------------------------|---------------------------------|-------------------------|-------------------------|
| **Geschwindigkeit**     | 3 Schritte / Runde     | 4 Schritte / Runde              | 5 Schritte / Runde      | 6 Schritte / Runde      |
| **Drehgeschwindigkeit** | 6 Grad / Runde         | 8 Grad / Runde                  | 12 Grad / Runde         | 16 Grad / Runde         |
| **Last**                | 4 Einheiten            | 5 Einheiten                     | 7 Einheiten             | 10 Einheiten            |
| **Reichweite**          | Standard * 0,75        | 1,5 mal quer über das Spielfeld | Standard * 1,5          | Standard * 2            |
| **Energie**             | 50 Lebenspunkte        | 100 Lebenspunkte                | 175 Lebenspunkte        | 250 Lebenspunkte        |
| **Angriff**             | 0 Lebenspunkte / Runde | 10 Lebenspunkte / Runde         | 20 Lebenspunkte / Runde | 30 Lebenspunkte / Runde |
