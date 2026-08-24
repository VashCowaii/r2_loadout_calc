const configAbility = {
  "fileName": "5014022_Monster_W5_Pam_Ability05_Part02_FateRin",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Modifier-Specific Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifierName": "<a class=\"gModGreen\" id=\"2128731606\">Modifier_Monster_W5_Pam_DefenceUp_FateRin</a>",
      "variableName": "UltraSkillTimelineStart",
      "value": 1
    },
    "Ability Start",
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "PhaseCharge"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1493708935\">Modifier_Monster_W5_Pam_Charge</a>[<span class=\"descriptionNumberColor\">Raring to Go</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1493708935\">Modifier_Monster_W5_Pam_Charge</a>[<span class=\"descriptionNumberColor\">Raring to Go</span>]",
      "stackType": "Replace",
      "description": "Uses \"Saturation Cleaning!\" in the next action.",
      "type": "Other",
      "effectName": "Charging",
      "statusName": "Raring to Go"
    }
  ]
}