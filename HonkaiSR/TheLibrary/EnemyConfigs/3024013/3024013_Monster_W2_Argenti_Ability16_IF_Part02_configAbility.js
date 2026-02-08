const configAbility = {
  "fileName": "3024013_Monster_W2_Argenti_Ability16_IF_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1639070947\">Enemy_W2_ArgentiTotem_IF_Initiate</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1851629784\">Enemy_W2_ArgentiTotem_01_IF_Initiate</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2041202953\">Enemy_W2_ArgentiTotem_02_IF_Initiate</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1718469723\">Collect_Power</a>"
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "silent": true
    },
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "typeOverride": "Buff",
      "silent": true
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      }
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-708808137\">Monster_W2_Argenti_Ability16_IF_MarkModifier</a>"
    }
  ]
}