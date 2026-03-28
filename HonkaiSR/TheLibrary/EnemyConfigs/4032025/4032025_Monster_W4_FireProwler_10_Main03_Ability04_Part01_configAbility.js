const configAbility = {
  "fileName": "4032025_Monster_W4_FireProwler_10_Main03_Ability04_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1617488496\">Enemy_W4_FireProwler_10_Main03_DuringAbility</a>"
    },
    {
      "name": "Remove from Team Target Grouping",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "stayInTeam": false
    },
    {
      "name": "Mark Entity For Immediate Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      }
    },
    {
      "name": "Force Entity Death",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      }
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W4_FireProwler_10_Main03_Ability04_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase2"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}