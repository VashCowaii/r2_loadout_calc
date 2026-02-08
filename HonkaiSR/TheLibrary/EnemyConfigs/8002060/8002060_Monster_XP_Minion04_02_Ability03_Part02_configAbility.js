const configAbility = {
  "fileName": "8002060_Monster_XP_Minion04_02_Ability03_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"1449818532\">Enemy_XP_Minion04_02_EscapingCharge02</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"196303828\">Enemy_XP_Minion04_02_EffectGround</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-801636319\">Enemy_XP_Minion04_02_EffectRound</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1010578616\">Enemy_XP_Minion04_02_Huimie_EffectGround</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"24516597\">Enemy_XP_Minion04_02_Huimie_EffectRound</a>"
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