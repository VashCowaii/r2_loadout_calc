const configAbility = {
  "fileName": "4035010_Monster_W4_IronTombCore_Ability082_Part01",
  "childAbilityList": [
    "4035010_Monster_W4_IronTombCore_Ability082_Part01",
    "4035010_Monster_W4_IronTombCore_Ability082_Camera"
  ],
  "skillTrigger": "Skill082",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-141772826\">MModifier_W4_IronTombCore_Ability07_BlockDamage</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1381137894\">MModifier_W4_IronTombCore_Ability07_MuteBreak</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"187835282\">MModifier_W4_IronTombCore_Ability07_Charge</a>[<span class=\"descriptionNumberColor\">Resist and Destroy</span>]"
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Phase1"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_CurrentStance",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
    },
    {
      "name": "Deal Toughness DMG",
      "value": {
        "operator": "Variables[0] (_CurrentStance) || RETURN",
        "displayLines": "_CurrentStance",
        "constants": [],
        "variables": [
          "_CurrentStance"
        ]
      },
      "defender": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "forceReduction": true,
      "canDelay": true,
      "ToughnessDMGType": {
        "name": "Damage Type Source",
        "sourceType": {}
      }
    }
  ],
  "references": []
}