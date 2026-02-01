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
      "modifier": "Enemy_W2_ArgentiTotem_IF_Initiate"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "Enemy_W2_ArgentiTotem_01_IF_Initiate"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "Enemy_W2_ArgentiTotem_02_IF_Initiate"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "Collect_Power"
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
      "for": "Monster_W2_Argenti_Ability16_IF_MarkModifier"
    }
  ]
}