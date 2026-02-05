const configAbility = {
  "fileName": "8002071_Monster_XP_Minion04_02_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Dispel Debuffs",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "silent": true
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_EscapingCharge02"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_EffectGround"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_EffectRound"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_Huimie_EffectGround"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Enemy_XP_Minion04_02_Huimie_EffectRound"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Character ID",
        "ID": 8002060,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": null
      }
    },
    {
      "name": "Mark Entity For Immediate Death"
    },
    "Trigger: Ability End",
    {
      "name": "Entity Escape Battle"
    }
  ],
  "references": []
}