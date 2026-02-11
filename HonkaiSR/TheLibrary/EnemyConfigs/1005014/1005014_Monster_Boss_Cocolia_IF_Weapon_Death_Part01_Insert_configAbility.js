const configAbility = {
  "fileName": "1005014_Monster_Boss_Cocolia_IF_Weapon_Death_Part01_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "inherentTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "ability": "Monster_Boss_Cocolia_IF_Weapon_Death_Part02_Insert",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value": "Summon01Flag"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value": "Summon01Flag"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value": "Summon01Flag"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value": "Summon01Flag"
      }
    }
  ],
  "references": []
}